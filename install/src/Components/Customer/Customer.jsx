import React, { useState } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';

const customersData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    address: '123 Main Street, Springfield',
    bookings: [
      { bookingId: 101, room: 'Deluxe Room', checkIn: '2025-02-01', checkOut: '2025-02-05' },
      { bookingId: 102, room: 'Standard Room', checkIn: '2025-03-10', checkOut: '2025-03-15' },
      { bookingId: 103, room: 'Presidential Suite', checkIn: '2025-04-20', checkOut: '2025-04-25' }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '+1 987 654 321',
    address: '456 Elm Street, Shelbyville',
    bookings: [
      { bookingId: 104, room: 'Suite', checkIn: '2025-04-01', checkOut: '2025-04-07' },
      { bookingId: 105, room: 'Penthouse', checkIn: '2025-05-10', checkOut: '2025-05-15' }
    ]
  },
  {
    id: 3,
    name: 'Mark Johnson',
    email: 'markjohnson@example.com',
    phone: '+1 555 123 456',
    address: '789 Oak Avenue, Capital City',
    bookings: [
      { bookingId: 106, room: 'Junior Suite', checkIn: '2025-06-01', checkOut: '2025-06-07' }
    ]
  },


  {
    id: 4,
    name: 'Alaina',
    email: 'Alaina@example.com',
    phone: '+1 555 123 656',
    address: '789 Oak Avenue, Capital City',
    bookings: [
      { bookingId: 106, room: 'Junior Suite', checkIn: '2025-06-01', checkOut: '2025-06-07' }
    ]
  }
];

function CustomerManagement() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(selectedCustomer?.id === customer.id ? null : customer);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#00796b' }} gutterBottom>
        Customer Management
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Customers Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="customer table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Customer Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Phone</strong></TableCell>
              <TableCell><strong>Action</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customersData.map((customer) => (
              <TableRow key={customer.id} sx={{ '&:hover': { backgroundColor: '#f1f1f1' } }}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    backgroundColor="#004d40"
                    onClick={() => handleCustomerClick(customer)}
                  >
                    {selectedCustomer?.id === customer.id ? 'Hide Bookings' : 'View Bookings'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Customer Booking History */}
      {selectedCustomer && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#00796b' }} gutterBottom>
            Booking History for {selectedCustomer.name}
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
            <Table sx={{ minWidth: 650 }} aria-label="booking table">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Booking ID</strong></TableCell>
                  <TableCell><strong>Room</strong></TableCell>
                  <TableCell><strong>Check-In</strong></TableCell>
                  <TableCell><strong>Check-Out</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedCustomer.bookings.map((booking) => (
                  <TableRow key={booking.bookingId}>
                    <TableCell>{booking.bookingId}</TableCell>
                    <TableCell>{booking.room}</TableCell>
                    <TableCell>{booking.checkIn}</TableCell>
                    <TableCell>{booking.checkOut}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
}

export default CustomerManagement;
