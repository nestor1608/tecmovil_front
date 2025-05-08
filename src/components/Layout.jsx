import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Phone, Mail } from 'lucide-react';
import Footer from './Footer';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  Container, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  Typography,
  useScrollTrigger,
  Slide,
  Divider
} from '@mui/material';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top contact info bar */}
      <Box sx={{ 
        bgcolor: '#0f172a', 
        color: 'white', 
        py: 1,
        display: { xs: 'none', sm: 'block' }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Button 
                href="tel:+543757460569" 
                startIcon={<Phone size={16} />}
                sx={{ 
                  color: 'white',
                  '&:hover': { color: '#90caf9' },
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  p: 0,
                  minWidth: 'auto'
                }}
              >
                +54 3757 460569
              </Button>
              <Button 
                href="mailto:info@tecmovil.com" 
                startIcon={<Mail size={16} />}
                sx={{ 
                  color: 'white',
                  '&:hover': { color: '#90caf9' },
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  p: 0,
                  minWidth: 'auto'
                }}
              >
                info@tecmovil.com
              </Button>
            </Box>
            <Typography variant="body2">
              Lun - Sáb 08:00 a 12:00 - 16:00 a 20:00
            </Typography>
          </Box>
        </Container>
      </Box>
      
      {/* Main navigation */}
      <HideOnScroll>
        <AppBar 
          position="sticky" 
          sx={{ 
            bgcolor: 'background.paper',
            backdropFilter: 'blur(8px)',
            boxShadow: 'none',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between', px: '0 !important' }}>
              {/* Logo */}
              <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'inherit' }}>
                <Smartphone size={48}  style={{ color: '#1976d2', marginRight: 8 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                    TECMOVIL
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Reparación profesional
                  </Typography>
                </Box>
              </Link>
              
              {/* Desktop Navigation */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
                <Button 
                  component={NavLink}
                  to="/"
                  end
                  sx={{ 
                    color: location.pathname === '/' ? '#1976d2' : '#3e3f40',
                    fontWeight: location.pathname === '/' ? 'bold' : 'normal'
                  }}
                >
                  Inicio
                </Button>
                <Button 
                  component={NavLink}
                  to="/tienda"
                  sx={{ 
                    color: location.pathname === '/tienda' ? '#1976d2' : '#3e3f40',
                    fontWeight: location.pathname === '/tienda' ? 'bold' : 'normal'
                  }}
                >
                  Tienda
                </Button>
                <Button 
                  component={NavLink}
                  to="/contacto"
                  sx={{ 
                    color: location.pathname === '/contacto' ? '#1976d2' : '#3e3f40',
                    fontWeight: location.pathname === '/contacto' ? 'bold' : 'normal'
                  }}
                >
                  Contacto
                </Button>
                <Button 
                  component={Link} 
                  to="/contacto" 
                  variant="contained" 
                  sx={{ ml: 2, bgcolor: '#1976d2' }}
                >
                  Solicitar Reparación
                </Button>
              </Box>
              
              {/* Mobile menu button */}
              <IconButton
                color="dark"
                edge="end"
                onClick={toggleMenu}
                sx={{ display: { md: 'none' } }}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
      {/* Mobile Navigation */}
      <Drawer
        anchor="right"
        open={isMenuOpen}
        onClose={closeMenu}
        PaperProps={{
          sx: { width: '80%', maxWidth: 320 }
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/" 
                end
                selected={location.pathname === '/'}
                onClick={closeMenu}
                sx={{ color: location.pathname === '/' ? '#1976d2' : 'inherit' }}
              >
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/tienda"
                selected={location.pathname === '/tienda'}
                onClick={closeMenu}
                sx={{ color: location.pathname === '/tienda' ? '#1976d2' : 'inherit' }}
              >
                <ListItemText primary="Tienda" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/contacto"
                selected={location.pathname === '/contacto'}
                onClick={closeMenu}
                sx={{ color: location.pathname === '/contacto' ? '#1976d2' : 'inherit' }}
              >
                <ListItemText primary="Contacto" />
              </ListItemButton>
            </ListItem>
          </List>
          
          <Box sx={{ px: 2, mt: 2 }}>
            <Button 
              fullWidth 
              variant="contained" 
              component={Link} 
              to="/contacto"
              onClick={closeMenu}
              sx={{ bgcolor: '#1976d2' }}
            >
              Solicitar Reparación
            </Button>
          </Box>
          
          {/* Mobile contact info */}
          <Divider sx={{ my: 3 }} />
          <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button 
              fullWidth
              href="tel:+34600000000" 
              startIcon={<Phone size={18} />}
              sx={{ 
                justifyContent: 'flex-start',
                color: 'text.secondary',
                textTransform: 'none',
                fontSize: '0.875rem',
                p: 0
              }}
            >
              +34 600 000 000
            </Button>
            <Button 
              fullWidth
              href="mailto:info@tecmovil.com" 
              startIcon={<Mail size={18} />}
              sx={{ 
                justifyContent: 'flex-start',
                color: 'text.secondary',
                textTransform: 'none',
                fontSize: '0.875rem',
                p: 0
              }}
            >
              info@tecmovil.com
            </Button>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              Lun - Vie: 9:00 - 20:00 | Sáb: 10:00 - 14:00
            </Typography>
          </Box>
        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      
      <Footer />
    </Box>
  );
};

export default Layout;