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
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Accordion, AccordionSummary, AccordionDetails, MenuItem } from '@mui/material';
import { FaShoppingCart, FaBox, FaTags, FaUsers, FaFileAlt, FaCog } from 'react-icons/fa'; // e-commerce icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // For the accordion arrow icon

// Define drawer width
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: "100%",  // Full width
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
        <List>
          {/* Products Accordion */}
          <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <ListItemIcon sx={{ color: '#00796b' }}>
                <FaBox />
              </ListItemIcon>
              <ListItemText sx={{ color: '#00796b' }} primary="Products" />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <MenuItem component={Link} to="/add-product" sx={{ color: '#00796b' }}>Add Product</MenuItem>
                <MenuItem component={Link} to="/product-list" sx={{ color: '#00796b' }}>Product List</MenuItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Categories Accordion */}
          <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <ListItemIcon sx={{ color: '#00796b' }}>
                <FaTags />
              </ListItemIcon>
              <ListItemText sx={{ color: '#00796b' }} primary="Categories" />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <MenuItem component={Link} to="/add-category" sx={{ color: '#00796b' }}>Add Category</MenuItem>
                <MenuItem component={Link} to="/category-list" sx={{ color: '#00796b' }}>Category List</MenuItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Orders Accordion */}
          <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <ListItemIcon sx={{ color: '#00796b' }}>
                <FaShoppingCart />
              </ListItemIcon>
              <ListItemText sx={{ color: '#00796b' }} primary="Orders" />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <MenuItem component={Link} to="/order-list" sx={{ color: '#00796b' }}>Order List</MenuItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Customers Accordion */}
          <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4d-content"
              id="panel4d-header"
            >
              <ListItemIcon sx={{ color: '#00796b' }}>
                <FaUsers />
              </ListItemIcon>
              <ListItemText sx={{ color: '#00796b' }} primary="Customers" />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <MenuItem component={Link} to="/customer-list" sx={{ color: '#00796b' }}>Customer List</MenuItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Reports Accordion */}
          <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5d-content"
              id="panel5d-header"
            >
              <ListItemIcon sx={{ color: '#00796b' }}>
                <FaFileAlt />
              </ListItemIcon>
              <ListItemText sx={{ color: '#00796b' }} primary="Reports" />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <MenuItem component={Link} to="/sales-report" sx={{ color: '#00796b' }}>Sales Report</MenuItem>
              </List>
            </AccordionDetails>
          </Accordion>

          {/* Settings Accordion */}
          <Accordion expanded={expanded === 'panel6'} onChange={handleAccordionChange('panel6')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel6d-content"
              id="panel6d-header"
            >
              <ListItemIcon sx={{ color: '#00796b' }}>
                <FaCog />
              </ListItemIcon>
              <ListItemText sx={{ color: '#00796b' }} primary="Settings" />
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <MenuItem component={Link} to="/account-settings" sx={{ color: '#00796b' }}>Account Settings</MenuItem>
                <MenuItem component={Link} to="/site-settings" sx={{ color: '#00796b' }}>Site Settings</MenuItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* Your content goes here */}
      </Box>
    </Box>
  );
}
