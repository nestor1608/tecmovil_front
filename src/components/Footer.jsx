import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link as MuiLink, Divider } from '@mui/material';
import { Phone, Mail, MapPin, Clock, Smartphone, MessageSquare } from 'lucide-react';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: '#0f172a',
  color: theme.palette.common.white,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(2),
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: theme.palette.common.white,
}));

const FooterLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.grey[400],
  display: 'block',
  marginBottom: theme.spacing(1),
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
  color: theme.palette.grey[400],
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: theme.spacing(1.5),
  marginTop: theme.spacing(0.5),
}));

const CopyrightSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  padding: theme.spacing(1, 0),
  marginTop: theme.spacing(2),
}));

const SocialIcon = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.common.white,
  marginRight: theme.spacing(2),
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About section */}
          <Grid size={{xs:12, sm:12, md:3}}>
            <FooterSection>
              <Box display="flex" alignItems="center" mb={2}>
                <Smartphone className='me-2'/>
                <Typography variant="h6" component="h3" fontWeight="bold">
                  TEC Movil
                </Typography>
              </Box>
              <Typography variant="body2" color="primary.main" paragraph>
                Especialistas en reparación de móviles con más de 10 años de experiencia. 
                Ofrecemos servicio rápido y de calidad para todas las marcas.
              </Typography>
              <Box display="flex" mt={2}>
                <SocialIcon href="#" aria-label="Facebook">
                  <Facebook fontSize="medium" />
                </SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">
                  <Instagram fontSize="medium" />
                </SocialIcon>
                <SocialIcon href="#" aria-label="WhatsApp">
                  <WhatsApp fontSize="medium" />
                </SocialIcon>
              </Box>
            </FooterSection>
          </Grid>
          
          {/* Quick Links */}
          <Grid size={{xs:12, sm:12, md:3}}>
            <FooterSection>
              <FooterTitle variant="h6">Enlaces Rápidos</FooterTitle>
              <nav>
                <FooterLink component={Link} to="/">Inicio</FooterLink>
                <FooterLink component={Link} to="/tienda">Tienda</FooterLink>
                <FooterLink component={Link} to="/contacto">Contacto</FooterLink>
                <FooterLink href="#servicios">Servicios</FooterLink>
                <FooterLink href="#sobre-nosotros">Sobre Nosotros</FooterLink>
              </nav>
            </FooterSection>
          </Grid>
          
          {/* Services */}
          <Grid size={{xs:12, sm:12, md:3}}>
            <FooterSection>
              <FooterTitle variant="h6">Servicios</FooterTitle>
              <Typography variant="body2" color="primary" component="div">
                <Box mb={1}>Reparación de Pantallas</Box>
                <Box mb={1}>Cambio de Baterías</Box>
                <Box mb={1}>Reparación de Carga</Box>
                <Box mb={1}>Recuperación de Datos</Box>
                <Box mb={1}>Reparación de Cámaras</Box>
                <Box>Diagnóstico Gratuito</Box>
              </Typography>
            </FooterSection>
          </Grid>
          
          {/* Contact Info */}
          <Grid size={{xs:12, sm:12, md:3}}>
            <FooterSection>
              <FooterTitle variant="h6">Contacto</FooterTitle>
              <ContactItem>
                <ContactIcon><MapPin size={20} /></ContactIcon>
                <Typography variant="body2">
                  Av. Los Pioneros Centro<br />
                  Comandante Andresito Misiones, Argentina.
                </Typography>
              </ContactItem>
              <ContactItem>
                <ContactIcon><Phone size={20} /></ContactIcon>
                <FooterLink href="tel:+543757460569">+543757460569</FooterLink>
              </ContactItem>
              <ContactItem>
                <ContactIcon><MessageSquare size={20} /></ContactIcon>
                <FooterLink href="https://wa.me/+543757460569">WhatsApp</FooterLink>
              </ContactItem>
              <ContactItem>
                <ContactIcon><Mail size={20} /></ContactIcon>
                <FooterLink href="mailto:info@tecmovil.com">Nor-cell@hotmail.com</FooterLink>
              </ContactItem>
              <ContactItem>
                <ContactIcon><Clock size={20} /></ContactIcon>
                <Typography variant="body2">
                Lunes - Sábados 08:00 a 12:00 - 16:00 a 20:00<br />
                Domingos: Cerrado
                </Typography>
              </ContactItem>
            </FooterSection>
          </Grid>
        </Grid>
        
        <Divider sx={{ bgcolor: 'grey.800', my: 2 }} />
        
        <CopyrightSection>
          <Container maxWidth="lg">
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="primary">
                &copy; {new Date().getFullYear()} TEC Movil. Todos los derechos reservados.
              </Typography>
              <Box mt={{ xs: 1, md: 0 }}>
                <Box component="nav">
                  <FooterLink href="#" sx={{ display: 'inline', mr: 2 }}>Política de Privacidad</FooterLink>
                  <FooterLink href="#" sx={{ display: 'inline' }}>Términos y Condiciones</FooterLink>
                </Box>
              </Box>
            </Box>
          </Container>
        </CopyrightSection>
      </Container>
    </StyledFooter>
  );
};

export default Footer;