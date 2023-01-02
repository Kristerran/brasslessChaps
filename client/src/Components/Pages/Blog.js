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
      <Typography style={{ textAlign: 'center' }} variant="h4">
        Welcome to the brassless chaps blog
      </Typography>
      <Typography style={{ textAlign: 'center' }} variant="h6">
        Where we share our latest news
      </Typography>
      {error && <p>Error fetching data</p>}
      {loading && <p>Fetching data...</p>}
      {data && (
        <Container>
          {data.blogPosts.map((post) => (
            <Card sx={{ marginTop: '10px' }}>
              <CardContent>
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="p">{post.contents}</Typography>
              </CardContent>
            </Card>
          ))}
        </Container>
      )}
    </Container>
  );
};

export default Blog;
