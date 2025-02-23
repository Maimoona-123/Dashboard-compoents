import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, Grid, Select, MenuItem, InputLabel, FormControl, IconButton } from '@mui/material';
import { AddCircle, Cancel } from '@mui/icons-material';

// Dummy payment data
const initialPayments = [
  {
    paymentID: 1,
    bookingID: 101,
    amount: 200,
    paymentDate: '2025-02-01',
    status: 'Completed',
  },
  {
    paymentID: 2,
    bookingID: 102,
    amount: 150,
    paymentDate: '2025-02-15',
    status: 'Pending',
  },
];

function PaymentManagement() {
  const [payments, setPayments] = useState(initialPayments);
  const [newPayment, setNewPayment] = useState({
    paymentID: '',
    bookingID: '',
    amount: '',
    paymentDate: '',
    status: '',
  });
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState('');

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayment({
      ...newPayment,
      [name]: value,
    });
  };

  // Handle adding a new payment
  const handleAddPayment = () => {
    if (!newPayment.bookingID || !newPayment.amount || !newPayment.paymentDate || !newPayment.status) {
      setError('All fields are required');
      return;
    }
    setError(''); // Reset error if validation passes

    const newPaymentData = {
      ...newPayment,
      paymentID: payments.length + 1, // Simple ID increment for new payment
    };

    setPayments([...payments, newPaymentData]);
    setNewPayment({
      paymentID: '',
      bookingID: '',
      amount: '',
      paymentDate: '',
      status: '',
    });
    setIsAdding(false); // Close the add payment form
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }} gutterBottom>
        Payment Management
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Add New Payment Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#00796b',
          color: 'white',
          mb: 3,
          ':hover': {
            backgroundColor: '#004d40', // Darker green on hover
          },
        }}
        onClick={() => setIsAdding(!isAdding)}
        startIcon={<AddCircle />}
      >
        {isAdding ? 'Cancel' : 'Add New Payment'}
      </Button>

      {/* Display error message */}
      {error && <Typography sx={{ color: 'red', marginBottom: '16px' }}>{error}</Typography>}

      {/* New Payment Form */}
      {isAdding && (
        <Box sx={{ mb: 3, backgroundColor: '#ffffff', borderRadius: '8px', p: 3, boxShadow: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b' }} gutterBottom>
            Add New Payment
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Booking ID"
                variant="outlined"
                margin="normal"
                fullWidth
                name="bookingID"
                value={newPayment.bookingID}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                margin="normal"
                name="amount"
                value={newPayment.amount}
                onChange={handleInputChange}
                required
                type="number"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Payment Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                name="paymentDate"
                value={newPayment.paymentDate}
                onChange={handleInputChange}
                required
                InputLabelProps={{
                  shrink: true,
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth margin="normal" required>
                <InputLabel>Status</InputLabel>
                <Select
                  label="Status"
                  name="status"
                  value={newPayment.status}
                  onChange={handleInputChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                    },
                  }}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#00796b',
              color: 'white',
              mt: 2,
              width: '100%',
              
            }}
            onClick={handleAddPayment}
          >
            Add Payment
          </Button>
        </Box>
      )}

      {/* Payment List */}
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: '8px', overflow: 'hidden' }}>
        <Table sx={{ minWidth: 650 }} aria-label="payment table">
          <TableHead sx={{ backgroundColor: '#00796b', color: 'white' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Payment ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Booking ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Amount</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Payment Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', color: 'white' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.paymentID}>
                <TableCell>{payment.paymentID}</TableCell>
                <TableCell>{payment.bookingID}</TableCell>
                <TableCell>${payment.amount}</TableCell>
                <TableCell>{payment.paymentDate}</TableCell>
                <TableCell>{payment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PaymentManagement;
