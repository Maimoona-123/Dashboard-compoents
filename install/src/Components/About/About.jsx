import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AboutUsPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are a team of dedicated individuals working together to build the best dashboard.
            Our mission is to provide insightful and easy-to-use tools to our users.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUsPage;
