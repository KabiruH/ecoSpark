import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Phone, Mail } from 'lucide-react';

const CTASection = ({ 
  title = "Ready to Go Solar?", 
  subtitle = "Get a free consultation and quote for your home solar installation",
  backgroundColor = '#1E3A8A',
  phoneNumber = "Call Now",
  showEmailButton = true 
}) => {
  return (
    <Box sx={{ py: 8, backgroundColor }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: '#BFDBFE', mb: 3, lineHeight: 1.4 }}>
            {subtitle}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone size={18} />}
              sx={{
                backgroundColor: 'white',
                color: backgroundColor,
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
              {phoneNumber}
            </Button>
            {showEmailButton && (
              <Button
                variant="outlined"
                size="large"
                startIcon={<Mail size={18} />}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: backgroundColor,
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
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;