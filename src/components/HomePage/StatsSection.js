import React from 'react';
import { Box, Container, Typography, Grid, Card, Avatar } from '@mui/material';
import { Calendar, Sun, Users, Award } from 'lucide-react';

const StatsSection = ({ 
  title = "About EcoSpark Solutions",
  subtitle = "Since 2022, we've been leading the renewable energy revolution in our community, helping homeowners and businesses transition to clean, sustainable solar power.",
  backgroundColor = '#F8FAFC'
}) => {
  const stats = [
    { number: '3+', label: 'Years in Business', icon: Calendar },
    { number: '500+', label: 'Installations Completed', icon: Sun },
    { number: '15+', label: 'Certified Electricians', icon: Users },
    { number: '98%', label: 'Customer Satisfaction', icon: Award }
  ];

  return (
    <Box sx={{ py: 8, backgroundColor }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: '#6B7280', mb: 4, maxWidth: '700px', mx: 'auto', lineHeight: 1.6 }}>
            {subtitle}
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={3} justifyContent="center">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Grid item xs={6} sm={3} md={3} key={index}> 
                <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: '#1E3A8A', 
                      width: 56, 
                      height: 56, 
                      mx: 'auto', 
                      mb: 2 
                    }}
                  >
                    <IconComponent size={28} color="white" />
                  </Avatar>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#F97316', mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#6B7280', fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;