import React, { useState } from 'react';
import { Button, TextField, IconButton, Grid, Typography, AppBar, Toolbar, Container } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/COnfig';
import { setUser } from '../Store/Slice/UserSlice';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        localStorage.setItem('token', user.accessToken);
        dispatch(setUser(user));
        navigate(user.role === 'admin' ? '/admin' : '/user');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div style={styles.container}>
      <AppBar position="static" style={styles.navbar}>
        <Toolbar style={styles.toolbar}>
          <Typography variant="h6" style={styles.navbarTitle}>
            MyApp
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container style={styles.formContainer}>
        <Typography variant="h5" style={styles.heading}>Login</Typography>

        <form onSubmit={handleSubmit} style={styles.form}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            required
            margin="normal"
            style={styles.textField}
            variant="outlined"
          />

          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            margin="normal"
            style={styles.textField}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              ),
            }}
          />

          <Button type="submit" variant="contained" style={styles.submitButton} fullWidth>
            Login
          </Button>

          <div style={styles.footer}>
            <Typography variant="body2" color="textSecondary">
              Don't have an account? <a href="/signup" style={styles.signupLink}>Sign Up</a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    padding: '0 10px',
  },
  navbar: {
    backgroundColor: '#00796b',
    marginBottom: '20px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navbarTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '30px 40px',
    borderRadius: '10px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '480px',
    marginTop: '40px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: '600',
    fontSize: '28px',
    color: '#00796b',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginBottom: '15px',
  },
  submitButton: {
    backgroundColor: '#00796b',
    color: 'white',
    fontWeight: 'bold',
    padding: '12px',
    fontSize: '16px',
    borderRadius: '6px',
    '&:hover': {
      backgroundColor: '#004d40',
    },
    marginBottom: '20px',
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  signupLink: {
    color: '#00796b',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default Login;
