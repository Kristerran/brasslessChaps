import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      _id
      email
    }
  }
  query blogPosts {
    blogPosts {
      _id
      title
      contents
    }
    query
    blogPost {
      _id
      title
      contents
    }
  }
`;
