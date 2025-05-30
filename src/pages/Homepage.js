import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import HeroCarousel from '../components/HomePage/HeroCarousel';
import FeatureCard from '../components/HomePage/FeatureCard';
import CTASection from '../components/HomePage/CTASection';
import { heroSlides, features } from '../components/HomePage/HomepageData';

const Homepage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroCarousel 
        slides={heroSlides}
        title="Power Your Home with"
        titleHighlight="Solar"
      />

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
              Why Choose EcoSpark?
            </Typography>
            <Typography variant="h6" sx={{ color: '#6B7280', maxWidth: '500px', mx: 'auto', lineHeight: 1.4 }}>
              Comprehensive solar solutions from consultation to installation and maintenance
            </Typography>
          </Box>
          
          <Grid container spacing={3} justifyContent="center">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection />
    </Box>
  );
};

export default Homepage;