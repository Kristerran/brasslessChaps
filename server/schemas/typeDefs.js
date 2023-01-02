const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    email: String
  }

  type BlogPost {
    _id: ID
    title: String
    contents: String
  }
  type BlogPosts {
    _id: ID
    title: String
    contents: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User

    blogPosts: [BlogPost]
    blogPost(blogPostId: ID!): BlogPost
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addBlogPost(title: String!, contents: String!): BlogPost
    removeUser(userId: ID!): User

    removeBlogPost(blogPostId: ID!): BlogPost

    updateUser(email: String, password: String): User

    updateBlogPost(blogPostId: ID!, title: String, contents: String): BlogPost
  }
`;

module.exports = typeDefs;
