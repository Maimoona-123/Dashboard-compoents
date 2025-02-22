import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Welcome to the Home Page
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is the home page of your website dashboard.
            You can add more content and features here.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
