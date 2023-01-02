const { AuthenticationError } = require('apollo-server-express');
const { User, BlogPost } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    blogPosts: async () => {
      return BlogPost.find();
    },
    blogPost: async (parent, { blogPostId }) => {
      return BlogPost.findOne({ _id: blogPostId });
    },
  },

  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({
        email,
        password,
      });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        //We need to change these messages
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        //Change here as well
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addBlogPost: async (parent, { title, contents }, context) => {
      console.log(context.user);
      console.log(parent);
      console.log(title, contents);
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const blogPost = await BlogPost.create({
          title,
          contents,
        });
        return { blogPost };
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Allow a user to update their profile information, without changing tier list.
    updateUser: async (parent, { email, password }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          {
            email: email,
            password: password,
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
