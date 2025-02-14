// src/TopBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Logo from './logo.svg';  // Assuming you have a logo.svg file

const theme = createTheme();

const TopNavBar = ({ darkMode, handleThemeChange }) => (
  <ThemeProvider theme={theme}>
    <AppBar position="static" style={{ padding: '10px 0' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="AuctionHouse Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6">AuctionHouse</Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            style={{ color: 'white', marginLeft: '10px' }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <IconButton color="inherit" onClick={handleThemeChange}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button color="inherit" startIcon={<ContactMailIcon />}>Support</Button>
          <Button color="inherit" startIcon={<LoginIcon />}>Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  </ThemeProvider>
);

export default TopNavBar;
