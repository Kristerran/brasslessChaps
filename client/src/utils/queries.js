import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`;

export const BLOGPOSTS = gql`
  query blogPosts {
    blogPosts {
      _id
      title
      contents
    }
  }
`;

export const BLOGPOST = gql`
  query blogPost {
    _id
    title
    contents
  }
`;
