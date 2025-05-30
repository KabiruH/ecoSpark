import React from 'react';
import { Box, Container, Typography, Grid, Card, Avatar, Paper } from '@mui/material';
import { Sun, Shield, Users, Award, Zap, CheckCircle, MapPin, Calendar, Wrench } from 'lucide-react';
import CTASection from '../components/CTASection';

const About = () => {

   const stats = [
      { number: '3+', label: 'Years in Business', icon: Calendar },
      { number: '300+', label: 'Installations Completed', icon: Sun },
      { number: '15+', label: 'Certified Electricians', icon: Users },
      { number: '98%', label: 'Customer Satisfaction', icon: Award }
    ];
  

  const certifications = [
    'Licensed Electrical Contractors',
    'Insured',
    'Solar Energy Industries Association Members',
    'Better Business Bureau Accredited',
    'Local Building Code Certified'
  ];

  const teamValues = [
    {
      icon: Shield,
      title: 'Quality & Safety',
      description: 'We prioritize safety in every installation and use only premium equipment with industry-leading warranties.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our certified electricians and solar specialists bring years of experience to every project.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay current with the latest solar technology and energy storage solutions to serve you better.'
    },
    {
      icon: Sun,
      title: 'Sustainability',
      description: 'Committed to reducing carbon footprints and promoting clean, renewable energy for future generations.'
    }
  ];

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
              About EcoSpark Solutions
            </Typography>
            <Typography variant="h5" sx={{ color: '#6B7280', mb: 4, maxWidth: '700px', mx: 'auto', lineHeight: 1.6 }}>
              Since 2022, we've been leading the renewable energy revolution in our community, 
              helping homeowners and businesses transition to clean, sustainable solar power.
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

{/* Our Process Section */}
<Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
        Our Proven Process
      </Typography>
      <Typography variant="h6" sx={{ color: '#6B7280' }}>
        From consultation to activation, here's how we make solar simple
      </Typography>
    </Box>
    
    <Grid container spacing={4}>
      {[
        { step: '01', title: 'Free Consultation', description: 'We assess your energy needs and property to design the perfect solar solution.' },
        { step: '02', title: 'Custom Design', description: 'Our engineers create a tailored system optimized for your home and energy goals.' },
        { step: '03', title: 'Professional Installation', description: 'Certified technicians install your system with precision and care.' },
        { step: '04', title: 'System Activation', description: 'We handle all permitting and utility connections to get you saving immediately.' }
      ].map((process, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#F97316', 
                opacity: 0.2, 
                mb: -2 
              }}
            >
              {process.step}
            </Typography>
            <Card sx={{ p: 3, height: '100%', position: 'relative', zIndex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
                {process.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.5 }}>
                {process.description}
              </Typography>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

    
      {/* Our Story Section */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
                Our Story
              </Typography>
              <Typography variant="body1" sx={{ color: '#6B7280', mb: 3, lineHeight: 1.8 }}>
                Founded in 2022, EcoSpark Solutions emerged from a simple belief: everyone deserves access to clean, 
                affordable energy. What started as a small team of passionate renewable energy advocates has grown 
                into the region's most trusted solar installation company.
              </Typography>
              <Typography variant="body1" sx={{ color: '#6B7280', mb: 3, lineHeight: 1.8 }}>
                Over the past three years, we've completed over 300 installations, helping families reduce their 
                energy costs while contributing to a more sustainable future. Our team of 15+ certified electricians 
                and solar specialists brings decades of combined experience to every project.
              </Typography>
              <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                We're not just installing solar panels—we're building relationships and creating lasting partnerships 
                with our community.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

 {/* Values Section */}
<Box sx={{ py: 8, backgroundColor: '#F8FAFC' }}>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
        Our Values
      </Typography>
      <Typography variant="h6" sx={{ color: '#6B7280' }}>
        The principles that guide everything we do
      </Typography>
    </Box>

    {/* Wrap values in a Grid with flex wrap support */}
    <Grid 
      container 
      spacing={4} 
      justifyContent="center" 
      alignItems="stretch"
    >
      {teamValues.map((value, index) => {
        const IconComponent = value.icon;
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ 
              p: 3, 
              height: '100%', 
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': { 
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
              }, 
              transition: 'all 0.3s ease'
            }}>
              <Avatar sx={{ 
                bgcolor: '#F97316', 
                width: 64, 
                height: 64, 
                mx: 'auto', 
                mb: 3 
              }}>
                <IconComponent size={32} color="white" />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>
                {value.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6B7280', lineHeight: 1.6 }}>
                {value.description}
              </Typography>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  </Container>
</Box>


      {/* Certifications Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#111827', mb: 2 }}>
              Certifications & Credentials
            </Typography>
            <Typography variant="h6" sx={{ color: '#6B7280' }}>
              Trusted expertise backed by industry certifications
            </Typography>
          </Box>
          
          <Grid container spacing={2} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    '&:hover': { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
                    transition: 'all 0.2s'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CheckCircle size={20} color="#059669" />
                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#111827' }}>
                      {cert}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8, backgroundColor: '#1E3A8A', color: 'white' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
              Our Mission
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, lineHeight: 1.6, opacity: 0.9 }}>
              "To accelerate the transition to sustainable energy by making solar power 
              accessible, affordable, and reliable for every home and business in our community."
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <MapPin size={32} color="#F97316" />
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                  Local Community Focus
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Wrench size={32} color="#F97316" />
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                  Expert Craftsmanship
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Sun size={32} color="#F97316" />
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                  Sustainable Future
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Join Our Solar Family?"
        subtitle="Experience the EcoSpark difference with our expert team and quality installations"
        backgroundColor="#F97316"
        phoneNumber="Call (555) 123-SOLAR"
      />
    </Box>
  );
};

export default About;