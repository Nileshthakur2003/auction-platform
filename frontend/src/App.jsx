import React, { useState } from 'react';
import './App.css';
import { Container, CssBaseline, Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopBar from './components/TopNavBar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TopBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
        
        <Container maxWidth="sm" style={{ textAlign: 'center', padding: '50px 0', flexGrow: 1 }}>
          <Typography variant="h2" gutterBottom>
            Welcome to AuctionHouse
          </Typography>
          <Typography variant="h5" paragraph>
            The best place to buy and sell items through real-time competitive bidding.
          </Typography>
          <Button variant="contained" color="primary" style={{ margin: '10px' }}>
            Get Started
          </Button>
          <Button variant="outlined" color="primary" style={{ margin: '10px' }}>
            Upcoming Auctions
          </Button>
          <Button variant="outlined" color="primary" style={{ margin: '10px' }}>
            Archives
          </Button>
          <Box mt={2}>
            <Button variant="contained" color="primary" style={{ margin: '10px' }}>
              Login
            </Button>
            <Typography variant="body1" display="inline" style={{ margin: '10px' }}>
              Not registered? <Link to="./" style={{ textDecoration: 'none', color: 'primary' }}>
                Sign up
              </Link>
            </Typography>
          </Box>
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
