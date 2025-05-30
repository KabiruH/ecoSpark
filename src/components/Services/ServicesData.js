import { Sun, Zap, Settings, Calculator, FileText, Home, Battery, Car, Shield, Wrench, Eye, Lightbulb, Building, Leaf } from 'lucide-react';

export const serviceCategories = [
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

export const benefits = [
    'Industry-leading warranties on all equipment',
    'NABCEP certified technicians',
    'Free energy consultations and quotes',
    'Financing options available',
    'Local permits and inspections handled',
    '25+ year system performance guarantee'
];