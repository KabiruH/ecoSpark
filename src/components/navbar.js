import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Avatar } from '@mui/material';
import { Sun, Menu as MenuIcon } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = ['Home', 'Services', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#1E3A8A', fontWeight: 'bold' }}>
        EcoSpark Solutions
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText 
              primary={item} 
              sx={{ 
                textAlign: 'center',
                '& .MuiTypography-root': {
                  color: '#374151',
                  fontWeight: 500,
                  '&:hover': {
                    color: '#1E3A8A',
                  }
                }
              }}
            />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: '#F97316',
              '&:hover': {
                backgroundColor: '#EA580C',
              },
              borderRadius: '25px',
              fontWeight: 600
            }}
          >
            Get Quote
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(30, 58, 138, 0.1)'
        }}
      >
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Avatar sx={{ bgcolor: '#1E3A8A', mr: 2, width: 32, height: 32 }}>
              <Sun size={20} color="white" />
            </Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                fontWeight: 'bold',
                color: '#111827',
                fontSize: isMobile ? '1.1rem' : '1.25rem'
              }}
            >
              EcoSpark Solutions
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#374151',
                    fontWeight: 500,
                    textTransform: 'none',
                    '&:hover': {
                      color: '#1E3A8A',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#F97316',
                  '&:hover': {
                    backgroundColor: '#EA580C',
                  },
                  borderRadius: '25px',
                  px: 3,
                  fontWeight: 600,
                  textTransform: 'none'
                }}
              >
                Get Quote
              </Button>
            </Box>
          )}

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#374151' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
