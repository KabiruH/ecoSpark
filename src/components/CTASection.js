import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const CTASection = ({ 
  title = "Ready to Go Solar?", 
  subtitle = "Get a free consultation and quote for your home solar installation",
  backgroundColor = '#1E3A8A',
  phoneNumber = "Call Now",
  showEmailButton = true,
  showWhatsAppButton = true,
  actualPhoneNumber = '+15551237627', // Add actual phone number prop
  whatsAppNumber = '15551237627' // Add WhatsApp number prop (without +)
}) => {

  const handlePhoneCall = () => {
    window.location.href = `tel:${actualPhoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi EcoSpark Solutions! I'm interested in getting a quote for solar installation. Could you please help me?`
    );
    const whatsappLink = `https://wa.me/${whatsAppNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('Solar Installation Quote Request');
    const body = encodeURIComponent(
      'Hi EcoSpark Solutions,\n\nI am interested in getting a quote for solar installation. Please contact me with more information.\n\nThank you!'
    );
    window.location.href = `mailto:assignmentsbychen@gmail.com?subject=${subject}&body=${body}`;
  };

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
            {/* Phone Button */}
            <Button
              variant="contained"
              size="large"
              startIcon={<Phone size={18} />}
              onClick={handlePhoneCall}
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

            {/* WhatsApp Button */}
            {showWhatsAppButton && (
              <Button
                variant="contained"
                size="large"
                startIcon={<MessageCircle size={18} />}
                onClick={handleWhatsApp}
                sx={{
                  backgroundColor: '#25D366',
                  color: 'white',
                  '&:hover': {
                   backgroundColor: '#22C55E',
                 },
                 borderRadius: '25px',
                 px: 3,
                 py: 1.5,
                 fontSize: '1rem',
                 fontWeight: 600,
                 textTransform: 'none'
               }}
             >
               WhatsApp
             </Button>
           )}

           {/* Email Button */}
           {showEmailButton && (
             <Button
               variant="outlined"
               size="large"
               startIcon={<Mail size={18} />}
               onClick={handleEmail}
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