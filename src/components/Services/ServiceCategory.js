import React from 'react';
import { Grid, Card, CardContent, Avatar, Typography, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ChevronDown } from 'lucide-react';

const ServiceCategory = ({ category, isExpanded, onToggle }) => {
  const IconComponent = category.icon;

  return (
    <Accordion
      expanded={isExpanded}
      onChange={onToggle}
      sx={{
        mb: 2,
        borderRadius: '12px !important',
        '&:before': { display: 'none' },
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <AccordionSummary
        expandIcon={<ChevronDown />}
        sx={{
          backgroundColor: isExpanded ? `${category.color}15` : '#F8FAFC',
          borderRadius: '12px',
          '&:hover': { backgroundColor: `${category.color}15` },
          minHeight: 80
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: category.color, width: 48, height: 48 }}>
            <IconComponent size={24} color="white" />
          </Avatar>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#111827' }}>
              {category.title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#6B7280' }}>
              {category.description}
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 4 }}>
        <Grid container spacing={3}>
          {category.services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: `${category.color}15`, 
                          width: 40, 
                          height: 40 
                        }}
                      >
                        <ServiceIcon size={20} color={category.color} />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ fontWeight: 600, color: '#111827', mb: 1 }}
                        >
                          {service.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ color: '#6B7280', lineHeight: 1.5 }}
                        >
                          {service.description}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default ServiceCategory;