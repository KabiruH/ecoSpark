import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  TextField, 
  Button, 
  Avatar,
  Alert,
  Snackbar
} from '@mui/material';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Solar Inquiry from Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:assignmentsbychen@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show success message
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi EcoSpark Solutions! I'm interested in learning more about your solar installation services. Could you please provide me with more information?`
    );
    // Replace with your actual WhatsApp number (include country code without +)
    const whatsappNumber = '1234567890'; // Replace with actual number
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '(555) 123-SOLAR',
      subInfo: '(555) 123-76527',
      action: () => window.location.href = 'tel:+15551237627'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'assignmentsbychen@gmail.com',
      subInfo: 'We respond within 24 hours',
      action: () => window.location.href = 'mailto:assignmentsbychen@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Solar Street',
      subInfo: 'Green Valley, CA 90210',
      action: () => window.open('https://maps.google.com', '_blank')
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: 'Mon - Fri: 8AM - 6PM',
      subInfo: 'Sat: 9AM - 4PM, Sun: Closed',
      action: null
    }
  ];

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section with Background */}
      <Box 
        sx={{ 
          py: 8, 
          position: 'relative',
          backgroundImage: 'url(https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(30, 58, 138, 0.8)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact EcoSpark Solutions
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Ready to start your solar journey? Get in touch with our experts today
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<MessageCircle size={20} />}
              onClick={handleWhatsApp}
              sx={{
                backgroundColor: '#25D366',
                color: 'white',
                '&:hover': { backgroundColor: '#22C55E' },
                borderRadius: '25px',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                mr: 2
              }}
            >
              WhatsApp Us
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Phone size={20} />}
              onClick={() => window.location.href = 'tel:+15551237627'}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                  color: '#1E3A8A'
                },
                borderRadius: '25px',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderWidth: '2px'
              }}
            >
              Call Now
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Form and Info Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <Card sx={{ p: 4, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body1" sx={{ color: '#6B7280', mb: 4 }}>
                  Fill out the form below and we'll get back to you within 24 hours with a custom solar solution for your home.
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                        placeholder="Tell us about your property, energy needs, or any questions you have about solar installation..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<Send size={20} />}
                        sx={{
                          backgroundColor: '#F97316',
                          '&:hover': { backgroundColor: '#EA580C' },
                          borderRadius: '25px',
                          px: 4,
                          py: 1.5,
                          fontSize: '1rem',
                          fontWeight: 600,
                          textTransform: 'none'
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} md={5}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#111827', mb: 3 }}>
                  Get In Touch
                </Typography>
                <Typography variant="body1" sx={{ color: '#6B7280', mb: 4 }}>
                  We're here to help you make the switch to solar energy. Contact us through any of these methods:
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Grid item xs={12} key={index}>
                      <Card 
                        sx={{ 
                          p: 3, 
                          cursor: contact.action ? 'pointer' : 'default',
                          '&:hover': contact.action ? { 
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                            transform: 'translateY(-2px)'
                          } : {},
                          transition: 'all 0.2s'
                        }}
                        onClick={contact.action}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                          <Avatar sx={{ bgcolor: '#1E3A8A', width: 48, height: 48 }}>
                            <IconComponent size={24} color="white" />
                          </Avatar>
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 0.5 }}>
                              {contact.title}
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#F97316', fontWeight: 500 }}>
                              {contact.info}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#6B7280' }}>
                              {contact.subInfo}
                            </Typography>
                          </Box>
                        </Box>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>

              {/* WhatsApp Quick Contact */}
              <Card sx={{ p: 3, mt: 3, backgroundColor: '#F0FDF4', border: '1px solid #22C55E' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#25D366', width: 48, height: 48, mx: 'auto', mb: 2 }}>
                    <MessageCircle size={24} color="white" />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
                    Quick WhatsApp Contact
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6B7280', mb: 2 }}>
                    Get instant answers to your solar questions
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={handleWhatsApp}
                    sx={{
                      backgroundColor: '#25D366',
                      '&:hover': { backgroundColor: '#22C55E' },
                      borderRadius: '20px',
                      textTransform: 'none'
                    }}
                  >
                    Start WhatsApp Chat
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Alert */}
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setShowAlert(false)} severity="success" sx={{ width: '100%' }}>
          Message sent! Your email client should open with the pre-filled message.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;