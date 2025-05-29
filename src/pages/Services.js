import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Accordion, AccordionSummary, AccordionDetails, Avatar, Paper} from '@mui/material';
import { Sun, Zap, Settings, Calculator, FileText, Home, Battery, Car, Shield, Wrench, Eye, Lightbulb, Building, Leaf, CheckCircle, Phone, ArrowRight, ChevronDown } from 'lucide-react';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState('pre-installation');

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedCategory(isExpanded ? panel : false);
  };

  const serviceCategories = [
    {
      id: 'pre-installation',
      title: 'Pre-Installation Services',
      icon: Calculator,
      color: '#1E3A8A',
      description: 'Complete assessment and planning for your solar journey',
      services: [
        {
          name: 'Energy Audits & Consumption Analysis',
          description: 'Detailed analysis of your current energy usage patterns and potential savings',
          icon: Calculator
        },
        {
          name: 'Site Assessment & Feasibility Studies',
          description: 'Professional evaluation of your property for optimal solar installation',
          icon: Eye
        },
        {
          name: 'Custom System Design & Engineering',
          description: 'Tailored solar system design based on your specific energy needs',
          icon: Settings
        },
        {
          name: 'Permit Applications & Regulatory Compliance',
          description: 'Complete handling of all necessary permits and regulatory requirements',
          icon: FileText
        },
        {
          name: 'HOA Approval Assistance',
          description: 'Support with homeowner association approvals and documentation',
          icon: Home
        },
        {
          name: 'Financing Consultation & Loan Facilitation',
          description: 'Expert guidance on financing options, tax credits, and rebate programs',
          icon: Calculator
        },
        {
          name: 'Roof Structural Assessment',
          description: 'Professional evaluation of roof condition and load-bearing capacity',
          icon: Home
        },
        {
          name: 'Shading Analysis & Optimization',
          description: 'Advanced analysis to maximize solar panel efficiency and placement',
          icon: Sun
        }
      ]
    },
    {
      id: 'installation',
      title: 'Installation & Technical Services',
      icon: Wrench,
      color: '#F97316',
      description: 'Professional installation and technical implementation',
      services: [
        {
          name: 'Solar Panel Installation',
          description: 'Expert installation of high-quality solar panels with optimal positioning',
          icon: Sun
        },
        {
          name: 'Electrical Panel Upgrades & Modifications',
          description: 'Electrical system upgrades to accommodate your solar installation',
          icon: Zap
        },
        {
          name: 'Roof Reinforcement & Repairs',
          description: 'Structural improvements to ensure safe and secure panel installation',
          icon: Home
        },
        {
          name: 'Battery Storage System Installation',
          description: 'Installation of energy storage solutions for backup power and efficiency',
          icon: Battery
        },
        {
          name: 'EV Charger Installation',
          description: 'Electric vehicle charging station setup powered by your solar system',
          icon: Car
        },
        {
          name: 'Smart Home Integration & Monitoring',
          description: 'Integration with smart home systems and real-time monitoring setup',
          icon: Settings
        },
        {
          name: 'Grid-Tie & Net Metering Setup',
          description: 'Connection to utility grid with net metering configuration',
          icon: Zap
        },
        {
          name: 'Inverter Installation & Configuration',
          description: 'Professional installation and optimization of solar inverters',
          icon: Settings
        },
        {
          name: 'Grounding & Safety Systems',
          description: 'Complete electrical safety and grounding system installation',
          icon: Shield
        }
      ]
    },
    {
      id: 'post-installation',
      title: 'Post-Installation & Maintenance',
      icon: Shield,
      color: '#059669',
      description: 'Ongoing support and maintenance for optimal performance',
      services: [
        {
          name: 'System Monitoring & Performance Tracking',
          description: '24/7 monitoring with detailed performance reports and alerts',
          icon: Eye
        },
        {
          name: 'Preventive Maintenance Programs',
          description: 'Regular maintenance schedules to ensure peak system performance',
          icon: Wrench
        },
        {
          name: 'Professional Cleaning Services',
          description: 'Regular panel cleaning to maintain maximum efficiency',
          icon: Sun
        },
        {
          name: 'Warranty Management & Claims',
          description: 'Complete warranty support and claims processing assistance',
          icon: Shield
        },
        {
          name: 'System Repairs & Troubleshooting',
          description: 'Expert diagnosis and repair of any system issues',
          icon: Wrench
        },
        {
          name: 'Equipment Replacement & Upgrades',
          description: 'Component replacement and system upgrade services',
          icon: Settings
        },
        {
          name: 'Performance Optimization',
          description: 'Ongoing system tuning for maximum energy production',
          icon: Zap
        },
        {
          name: 'Annual System Inspections',
          description: 'Comprehensive yearly inspections and safety checks',
          icon: Eye
        }
      ]
    },
    {
      id: 'additional',
      title: 'Additional Energy Solutions',
      icon: Lightbulb,
      color: '#7C3AED',
      description: 'Comprehensive energy efficiency and related services',
      services: [
        {
          name: 'Commercial Solar Installations',
          description: 'Large-scale solar solutions for businesses and commercial properties',
          icon: Building
        },
        {
          name: 'Solar Water Heating Systems',
          description: 'Solar-powered water heating solutions for residential and commercial use',
          icon: Sun
        },
        {
          name: 'LED Lighting Retrofits',
          description: 'Energy-efficient LED lighting upgrades for homes and businesses',
          icon: Lightbulb
        },
        {
          name: 'Home Insulation Services',
          description: 'Professional insulation installation to improve energy efficiency',
          icon: Home
        },
        {
          name: 'Energy Efficiency Audits',
          description: 'Comprehensive building energy efficiency assessments',
          icon: Leaf
        },
        {
          name: 'Solar Pool Heating',
          description: 'Solar-powered pool heating systems for year-round enjoyment',
          icon: Sun
        },
        {
          name: 'Off-Grid Solar Solutions',
          description: 'Complete off-grid solar power systems for remote locations',
          icon: Battery
        },
        {
          name: 'Solar Lighting Systems',
          description: 'Outdoor solar-powered lighting for security and landscaping',
          icon: Lightbulb
        },
        {
          name: 'Energy Management Consulting',
          description: 'Strategic energy planning and cost reduction consulting',
          icon: Calculator
        },
        {
          name: 'Green Building Certification Support',
          description: 'Assistance with LEED and other green building certifications',
          icon: Leaf
        }
      ]
    }
  ];

  const benefits = [
    'Industry-leading warranties on all equipment',
    'NABCEP certified technicians',
    'Free energy consultations and quotes',
    'Financing options available',
    'Local permits and inspections handled',
    '25+ year system performance guarantee'
  ];

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
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Accordion
                  key={category.id}
                  expanded={expandedCategory === category.id}
                  onChange={handleAccordionChange(category.id)}
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
                      backgroundColor: expandedCategory === category.id ? `${category.color}15` : '#F8FAFC',
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
            })}
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
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                >
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
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: '#F97316',
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
                Schedule Consultation
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;