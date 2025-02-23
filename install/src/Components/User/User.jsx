import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';

// Dummy user data
const initialUsers = [
  {
    userID: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
    role: 'Admin',
    contactInfo: '+1 234 567 890',
  },
  {
    userID: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    password: 'password456',
    role: 'Manager',
    contactInfo: '+1 987 654 321',
  },
];

function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [newUser, setNewUser] = useState({
    userID: '',
    name: '',
    email: '',
    password: '',
    role: '',
    contactInfo: '',
  });
  const [isAdding, setIsAdding] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  // Handle adding a new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.password && newUser.role && newUser.contactInfo) {
      const newUserData = {
        ...newUser,
        userID: users.length + 1, // Simple ID increment for new user
      };
      setUsers([...users, newUserData]);
      setNewUser({
        userID: '',
        name: '',
        email: '',
        password: '',
        role: '',
        contactInfo: '',
      });
      setIsAdding(false); // Close the add user form
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }} gutterBottom>
        User Management
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Add New User Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#00796b',
          color: 'white',
          mb: 3,
        }}
        onClick={() => setIsAdding(!isAdding)}
      >
        {isAdding ? 'Cancel' : 'Add New User'}
      </Button>

      {/* New User Form */}
      {isAdding && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b' }} gutterBottom>
            Add New User
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            margin="normal"
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
          />
          <TextField
            label="Contact Info"
            variant="outlined"
            fullWidth
            margin="normal"
            name="contactInfo"
            value={newUser.contactInfo}
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00796b',
              color: 'white',
              mt: 2,
            }}
            onClick={handleAddUser}
          >
            Add User
          </Button>
        </Box>
      )}

      {/* User List */}
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell><strong>User ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Contact Info</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userID}>
                <TableCell>{user.userID}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.contactInfo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UserManagement;
