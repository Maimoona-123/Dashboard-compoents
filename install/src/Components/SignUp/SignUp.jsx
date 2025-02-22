import React, { useState } from 'react';
import { auth, db } from '../Firebase/COnfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser } from '../Store/Slice/UserSlice';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Radio, RadioGroup, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Swal from 'sweetalert2'; 

const SignupForm = () => {
  const [mainState, setMainState] = useState({
    email: '',
    name: '',
    password: '',
    role: ''
  });
  const [showPassword, setShowPassword] = useState(false); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, name, role, password } = mainState;

      const userDocRef = doc(db, role, email);
      const userSnapshot = await getDoc(userDocRef);
      
      if (userSnapshot.exists()) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This email is already registered!',
        });
        return; 
      }

      // Sign up the user if email doesn't exist
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      console.log(user, 'my new user');

      // Save user details in Firestore
      await setDoc(doc(db, role, user.uid), {
        email: user.email,
        uid: user.uid,
        role
      });

      dispatch(setUser(user));

      navigate('/login');
      
    } catch (error) {
      console.error('Error signing up:', error);
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: error.message,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMainState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClickShowPassword = () => {
    setShowPassword(prevState => !prevState); 
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.heading}>Create Your Account</h2>

          <TextField
            label="Full Name"
            name="name"
            type="text"
            value={mainState.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            style={styles.textField}
          />

          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={mainState.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            style={styles.textField}
          />

          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"} 
            value={mainState.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            style={styles.textField}
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

          <Accordion defaultExpanded style={styles.accordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} style={styles.accordionSummary}>
              <h3 style={styles.accordionHeading}>Select Your Role</h3>
            </AccordionSummary>
            <AccordionDetails style={styles.accordionDetails}>
              <RadioGroup
                name="role"
                value={mainState.role}
                onChange={handleChange}
              >
                <FormControlLabel value="user" control={<Radio />} label="User" />
                <FormControlLabel value="admin" control={<Radio />} label="Admin" />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          <Button type="submit" variant="contained" style={styles.submitButton} fullWidth>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#e0f2f1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '0 10px',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '480px',
    backdropFilter: 'blur(8px)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontWeight: '600',
    fontSize: '25px',
  },
  textField: {
    marginBottom: '20px',
    borderRadius: '6px',
  },
  accordion: {
    boxShadow: 'none',
  },
  accordionSummary: {
    backgroundColor: '#f1f1f1',
    '&:hover': {
      backgroundColor: '#e0e0e0',
    },
  },
  accordionHeading: {
    color: '#444',
    fontSize: '18px',
  },
  accordionDetails: {
    backgroundColor: '#f5f5f5',
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
  },
};

export default SignupForm;
