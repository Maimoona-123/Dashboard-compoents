// src/HomePage.js
import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../Store/Slice/UserSlice'; // Import action from the slice

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    // Navigate to login page
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div style={styles.container}>
      {/* Top Navbar */}
      <div style={styles.navbar}>
        <h3 style={styles.navbarText}>App Name</h3>
        <div style={styles.navButtons}>
          <Button
            variant="contained"
            style={styles.button}
            onClick={handleSignupClick}
          >
            Signup
          </Button>
          <Button
            variant="contained"
            style={styles.button}
            onClick={handleLoginClick}
          >
             Login
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div style={styles.mainContent}>
        <div style={styles.centeredTextContainer}>
          <h1 style={styles.headingText}>Welcome to Our App!</h1>
          <p style={styles.descriptionText}>Click the buttons above to Log in or Sign Up and get started.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start', 
    backgroundColor: '#e0f2f1', 
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#004d40', 
    padding: '8px 20px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, 
  },
  navbarText: {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navButtons: {
    display: 'flex',
    gap: '25px',
  },
  button: {
    backgroundColor: 'white', 
    color: '#004d40',
    '&:hover': {
      backgroundColor: '#00332a', 
    },
    padding: '8px 20px',
    fontSize: '18px',
    borderRadius: '6px',
  },
  mainContent: {
    marginTop: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
  },
  centeredTextContainer: {
    textAlign: 'center',
    padding: '30px',
    backgroundColor: '#ffffff', 
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    maxWidth: '600px',
  },
  headingText: {
    fontSize: '36px',
    color: '#004d40',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  descriptionText: {
    fontSize: '18px',
    color: '#00796b', 
    fontWeight: '300',
    lineHeight: '1.6',
    maxWidth: '500px',
    margin: 'auto',
  },
};

export default HomePage;
