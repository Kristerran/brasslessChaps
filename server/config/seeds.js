const db = require('./connection');
const { User, Product, Category, BlogPost } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    email: 'terran@testmail.com',
    password: 'password12345',
  });
  console.log('Users Seeded');
  await BlogPost.create({
    title: 'Blog Post 01',
    contents: 'I am a blogpost hear me roar, I am a blog post, want some more?',
  });
  console.log('Blogposts Seeded');

  process.exit();
});
