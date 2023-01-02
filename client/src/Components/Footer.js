import React, { useState } from 'react';
import { AppBar, Typography, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Auth from '../utils/auth';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
const Footer = (props) => {
  return (
    <Box sx={{ bgcolor: 'none', p: 6 }} component="footer">
      <Typography color="Grey" variant="h6" align="center" gutterBottom>
        Brassless Chaps!
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="Grey"
        s
        component="p"
      >
        Website created by Kris Terran Baily
      </Typography>
    </Box>
  );
};

export default Footer;
