import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { CheckCircle, Phone, ArrowRight } from 'lucide-react';
import ServiceCategory from '../components/Services/ServiceCategory';
import { serviceCategories, benefits } from '../components/Services/ServicesData';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState('pre-installation');

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedCategory(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box sx={{ py: 8, backgroundColor: '#1E3A8A', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Our Solar Services
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: '#BFDBFE', maxWidth: '600px', mx: 'auto' }}>
              Complete solar solutions from initial consultation to ongoing maintenance
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
              sx={{
                backgroundColor: '#F97316',
                '&:hover': { backgroundColor: '#EA580C' },
                borderRadius: '25px',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none'
              }}
            >
              Get Free Consultation
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Service Categories */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
              Comprehensive Solar Solutions
            </Typography>
            <Typography variant="h6" sx={{ color: '#6B7280', maxWidth: '500px', mx: 'auto' }}>
              From planning to maintenance, we handle every aspect of your solar journey
            </Typography>
          </Box>

          <Box sx={{ mb: 6 }}>
            {serviceCategories.map((category) => (
              <ServiceCategory
                key={category.id}
                category={category}
                isExpanded={expandedCategory === category.id}
                onToggle={handleAccordionChange(category.id)}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: 6, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
              Why Choose EcoSpark?
            </Typography>
            <Typography variant="h6" sx={{ color: '#6B7280' }}>
              Professional service backed by industry expertise
            </Typography>
          </Box>
          <Grid container spacing={2} justifyContent="center">
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper sx={{ p: 3, textAlign: 'center', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle size={20} color="#059669" />
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#111827' }}>
                      {benefit}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, backgroundColor: '#F97316' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
              Ready to Start Your Solar Journey?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Get a free consultation and custom quote for your solar project
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Phone size={18} />}
                sx={{
                  backgroundColor: 'white',
                  color: '#F97316',
                  '&:hover': { backgroundColor: '#F1F5F9' },
                  borderRadius: '25px',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                Call (555) 123-SOLAR
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;