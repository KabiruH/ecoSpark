import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, Container, Grid, Card, IconButton, Avatar } from '@mui/material';
import { ChevronLeft, ChevronRight, Sun, Zap, Phone, Mail, Settings } from 'lucide-react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      description: "Professional residential solar installations with premium equipment",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
    },
    {
      id: 2,
      description: "Sustainable power systems designed for your home",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
    },
    {
      id: 3,
      description: "From energy audits to system maintenance, we've got you covered",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <Box>
      {/* Hero Section with Carousel */}
      <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1
              }
            }}
          />
        ))}

        {/* Hero Content */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', color: 'white' }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                }}
              >
                Power Your Home with{' '}
                <Box component="span" sx={{ color: '#F97316' }}>
                  Solar
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                {slides[currentSlide].description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#F97316',
                    '&:hover': {
                      backgroundColor: '#EA580C',
                      transform: 'scale(1.05)'
                    },
                    borderRadius: '25px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  Start Your Journey
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#111827',
                      borderColor: 'white'
                    },
                    borderRadius: '25px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderWidth: '2px'
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Carousel Controls */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }
          }}
        >
          <ChevronLeft size={24} />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }
          }}
        >
          <ChevronRight size={24} />
        </IconButton>

        {/* Carousel Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            display: 'flex',
            gap: 1
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentSlide ? '#F97316' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            />
          ))}
        </Box>
      </Box>

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
                  <Sun size={28} color="#1E3A8A" />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1.5 }}>
                  Expert Installation
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.5 }}>
                  Professional installation by certified technicians with years of experience
                </Typography>
              </Card>
            </Grid>
            
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
                  <Zap size={28} color="#1E3A8A" />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1.5 }}>
                  Premium Equipment
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.5 }}>
                  High-quality solar panels and components with industry-leading warranties
                </Typography>
              </Card>
            </Grid>
            
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
                  <Settings size={28} color="#1E3A8A" />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1.5 }}>
                  Full Service
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.5 }}>
                  From energy audits to maintenance, we handle every aspect of your solar journey
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 8, backgroundColor: '#1E3A8A' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
              Ready to Go Solar?
            </Typography>
            <Typography variant="h6" sx={{ color: '#BFDBFE', mb: 3, lineHeight: 1.4 }}>
              Get a free consultation and quote for your home solar installation
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Phone size={18} />}
                sx={{
                  backgroundColor: 'white',
                  color: '#1E3A8A',
                  '&:hover': {
                    backgroundColor: '#F1F5F9',
                  },
                  borderRadius: '25px',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                Call Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Mail size={18} />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#1E3A8A',
                    borderColor: 'white'
                  },
                  borderRadius: '25px',
                  px: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderWidth: '2px'
                }}
              >
                Get Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Homepage