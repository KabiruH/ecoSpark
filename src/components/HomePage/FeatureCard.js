import React from 'react';
import { Card, Avatar, Typography, Grid } from '@mui/material';

const FeatureCard = ({ icon: Icon, title, description, iconColor = '#1E3A8A' }) => {
  return (
    <Grid item xs={12} md={4}>
      
      <Card 
        sx={{ 
          textAlign: 'center', 
          p: 3, 
          height: '100%',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-4px)'
          },
          transition: 'all 0.3s ease'
        }}
      >
        <Avatar 
          sx={{ 
            width: 56, 
            height: 56, 
            backgroundColor: '#DBEAFE', 
            mx: 'auto', 
            mb: 2 
          }}
        >
          <Icon size={28} color={iconColor} />
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.5 }}>
          {description}
        </Typography>
      </Card>
    </Grid>
  );
};

export default FeatureCard;