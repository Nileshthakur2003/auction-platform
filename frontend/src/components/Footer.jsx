// src/Footer.jsx
import React from 'react';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Footer = () => (
  <ThemeProvider theme={theme}>
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#282c34', color: 'white', marginTop: 'auto' }}>
      <Typography variant="body1">Contact us: info@auctionhouse.com</Typography>
    </footer>
  </ThemeProvider>
);

export default Footer;
