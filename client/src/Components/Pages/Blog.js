import { useQuery } from '@apollo/client';
import { BLOGPOSTS } from '../../utils/queries';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';
const Blog = () => {
  const { loading, data, error } = useQuery(BLOGPOSTS, {});
  if (loading) return 'Updating Characters';
  if (error) return 'Crit failure, try again';
  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography>Blog</Typography>
      {error && <p>Error fetching data</p>}
      {loading && <p>Fetching data...</p>}
      {data && (
        <div>
          {data.blogPosts.map((post) => (
            <div>
              <h1>{post.title}</h1>
              <h1>{post.contents}</h1>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Blog;
