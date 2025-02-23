import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import { GrHome } from 'react-icons/gr';
import { TbBrandBooking } from 'react-icons/tb';
import { MdMiscellaneousServices, MdOutlineInventory, MdPayments } from 'react-icons/md';
import { VscReport } from 'react-icons/vsc';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaBuildingUser } from 'react-icons/fa6';
import UserProfile from '../User/User';
import BookingForm from '../Booking/BOoking';
import Customer from '../Customer/Customer';
import RoomList from '../Room/Room';
import PaymentPage from '../Payment/Payment';
import ServicesPage from '../Services/Services';
import InventoryPage from '../Inventory/Inventory';
import ReportPage from '../Report/Report';

// Define drawer width
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();
  
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%", 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          color: "white",
          background: "linear-gradient(to right, #00796b, lightblue )"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap component="div">
            E-commerce Admin Dashboard
          </Typography>
          <Button onClick={logOut} variant='contained' sx={{ backgroundColor: "white", color: "#00796b" }}>SignOut</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'linear-gradient(to right, )',
            color: 'black'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List sx={{marginTop: 2}}>
          {/* User Section */}
          <ListItem button onClick={() => handleNavigation('/user')}>
            <ListItemIcon sx={{ color: '#00796b', fontSize: '24px' }}>
              <FaUser />
            </ListItemIcon>
            <ListItemText sx={{ color: '#00796b' }} primary="User" />
          </ListItem>

          {/* Customer Section */}
          <ListItem button onClick={() => handleNavigation('/customer')}>
            <ListItemIcon sx={{ color: '#00796b', fontSize: '24px' }}>
              <FaBuildingUser />
            </ListItemIcon>
            <ListItemText sx={{ color: '#00796b' }} primary="Customer" />
          </ListItem>

          {/* Room Section */}
          <ListItem button onClick={() => handleNavigation('/room')}>
            <ListItemIcon sx={{ color: '#00796b', fontSize: '24px' }}>
              <GrHome />
            </ListItemIcon>
            <ListItemText sx={{ color: '#00796b' }} primary="Room" />
          </ListItem>

          {/* Payment Section */}
          <ListItem button onClick={() => handleNavigation('/payment')}>
            <ListItemIcon sx={{ color: '#00796b', fontSize: '24px' }}>
              <MdPayments />
            </ListItemIcon>
            <ListItemText sx={{ color: '#00796b' }} primary="Payment" />
          </ListItem>

          {/* Service Section */}
          <ListItem button onClick={() => handleNavigation('/service')}>
            <ListItemIcon sx={{ color: '#00796b', fontSize: '24px' }}>
              <MdMiscellaneousServices />
            </ListItemIcon>
            <ListItemText sx={{ color: '#00796b' }} primary="Service" />
          </ListItem>

          {/* Inventory Section */}
          <ListItem button onClick={() => handleNavigation('/inventory')}>
            <ListItemIcon sx={{ color: '#00796b', fontSize: '24px' }}>
              <MdOutlineInventory />
            </ListItemIcon>
            <ListItemText sx={{ color: '#00796b' }} primary="Inventory" />
          </ListItem>

          {/* Report Section */}
          <ListItem button onClick={() => handleNavigation('/report')}>
            <ListItemIcon sx={{ color: '#00796b', fontSize: '24px' }}>
              <VscReport />
            </ListItemIcon>
            <ListItemText sx={{ color: '#00796b' }} primary="Report" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Routes>
          <Route path='/user' element={<UserProfile />} />
          <Route path='/customer' element={<Customer />} />
          <Route path='/room' element={<RoomList />} />
          <Route path='/payment' element={<PaymentPage />} />
          <Route path='/service' element={<ServicesPage />} />
          <Route path='/inventory' element={<InventoryPage />} />
          <Route path='/report' element={<ReportPage />} />
          <Route path="/" element={<BookingForm />} />  {/* Default route */}
        </Routes>
      </Box>
    </Box>
  );
}
