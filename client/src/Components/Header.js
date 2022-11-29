import React, { useState } from 'react';
import { AppBar, Typography, IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from 'react-router-dom';
const Header = (props) => {
  return (
    <AppBar
      sx={{
        backgroundColor: '#e4c3e2',
        position: 'fixed',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-evenly' }}>
        <IconButton component={RouterLink} to="/">
          <img src="../images/logo.svg" />
        </IconButton>
        <nav style={{ marginLeft: 'auto', marginRight: '5%' }}>
          <IconButton
            component={RouterLink}
            s
            to="/blog"
            sx={{ color: '#C1A84F' }}
          >
            <Typography variant="h6">Blog</Typography>
          </IconButton>
        </nav>
        <nav style={{ marginLeft: 'auto', marginRight: '5%' }}>
          <IconButton
            component={RouterLink}
            to="/videos"
            sx={{ color: '#C1A84F' }}
          >
            <Typography variant="h6">Media</Typography>
          </IconButton>
        </nav>
        <nav style={{ marginLeft: 'auto', marginRight: '5%' }}>
          <IconButton
            component={RouterLink}
            to="/about"
            sx={{ color: '#C1A84F' }}
          >
            <Typography variant="h6">About Us</Typography>
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
