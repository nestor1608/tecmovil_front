import { MapPin, Phone, Mail, Clock, Smartphone, Shield } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Avatar,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from '@mui/material';
import {WhatsApp } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      {/* Hero section */}
      <Box
        sx={{
          py: 8,
          backgroundColor: '#0f172a',
          color: 'primary.contrastText'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Contacta con nosotros
            </Typography>
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
              Estamos aquí para ayudarte con cualquier problema de tu dispositivo móvil.
              Contacta con nosotros para obtener un presupuesto gratuito o más información.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact form */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <ContactForm />
            </Grid>

            {/* Contact information */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  Información de contacto
                </Typography>

                <Box sx={{ '& > div': { mb: 3 } }}>
                  <Box display="flex">
                    <Avatar sx={{ bgcolor: 'primary', color: 'primary.main', mr: 2 }}>
                      <MapPin />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 500 }}>
                        Dirección
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Av. Los Pioneros Centro<br />
                        Comandante Andresito Misiones, Argentina.
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Avatar sx={{ bgcolor: 'primary', color: 'primary.main', mr: 2 }}>
                      <Phone />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 500 }}>
                        Teléfono
                      </Typography>
                      <Link
                        href="tel:+543757460569"
                        color="primary.main"
                        underline="hover"
                        sx={{ '&:hover': { color: 'primary.dark' } }}
                      >
                        +543757460569
                      </Link>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Avatar sx={{ bgcolor: 'primary', color: 'primary.main', mr: 2 }}>
                      <Mail />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 500 }}>
                        Email
                      </Typography>
                      <Link
                        href="mailto:info@tecmovil.com"
                        color="primary.main"
                        underline="hover"
                        sx={{ '&:hover': { color: 'primary.dark' } }}
                      >
                        Nor-cell@hotmail.com
                      </Link>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Avatar sx={{ bgcolor: 'primary', color: 'primary.main', mr: 2 }}>
                      <WhatsApp  />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 500 }}>
                        WhatsApp
                      </Typography>
                      <Link
                        href="https://wa.me/+543757460569" // Reemplaza con tu número real
                        target="_blank"
                        rel="noopener noreferrer"
                        color="primary.main"
                        underline="hover"
                        sx={{ '&:hover': { color: 'primary.dark' } }}
                      >
                        +54 3757 460569
                      </Link>
                    </Box>
                  </Box>

                  <Box display="flex">
                    <Avatar sx={{ bgcolor: 'primary', color: 'primary.main', mr: 2 }}>
                      <Clock />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 500 }}>
                        Horario
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Lunes - Sábados 08:00 a 12:00 - 16:00 a 20:00<br />
                        Domingos: Cerrado
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              {/* Why choose us */}
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  ¿Por qué elegirnos?
                </Typography>

                <Box sx={{ '& > div': { mb: 2 } }}>
                  <Box display="flex" alignItems="flex-start">
                    <Avatar sx={{
                      bgcolor: 'transparent',
                      color: 'primary.main',
                      mr: 2,
                      width: 24,
                      height: 24
                    }}>
                      <Smartphone size={20} />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 500 }}>
                        Técnicos certificados
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Nuestro equipo está formado por profesionales con años de experiencia.
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="flex-start">
                    <Avatar sx={{
                      bgcolor: 'transparent',
                      color: 'primary.main',
                      mr: 2,
                      width: 24,
                      height: 24
                    }}>
                      <Shield size={20} />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 500 }}>
                        Garantía en todas las reparaciones
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Ofrecemos 12 meses de garantía en todas nuestras reparaciones.
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" alignItems="flex-start">
                    <Avatar sx={{
                      bgcolor: 'transparent',
                      color: 'primary.main',
                      mr: 2,
                      width: 24,
                      height: 24
                    }}>
                      <Clock size={20} />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="h4" sx={{ fontWeight: 500 }}>
                        Reparaciones rápidas
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        La mayoría de las reparaciones se realizan en menos de 1 hora.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map section
      <Box sx={{ height: 400, position: 'relative' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24290.206295238086!2d-3.7048580714877277!3d40.41669715059851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1653398288797!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de TEC Movil"
        ></iframe>
      </Box> */}

      {/* FAQ Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Preguntas frecuentes
          </Typography>

          <Box sx={{ '& > div': { mb: 2 } }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  ¿Cuánto tiempo tarda una reparación?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  La mayoría de nuestras reparaciones se realizan en menos de una hora, dependiendo del tipo de reparación y la disponibilidad de repuestos.
                  En casos más complejos, podemos necesitar hasta 24 horas.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  ¿Qué garantía ofrecen en las reparaciones?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  Todas nuestras reparaciones incluyen una garantía de 12 meses que cubre cualquier defecto en los repuestos utilizados o en la mano de obra.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  ¿Puedo obtener un presupuesto antes de la reparación?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  Sí, ofrecemos diagnóstico y presupuesto gratuitos sin compromiso. Te informaremos del coste exacto antes de proceder con cualquier reparación.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  ¿Qué tipos de pago aceptan?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  Aceptamos pagos en efectivo, tarjetas de crédito/débito, y transferencias bancarias. También disponemos de opciones de financiación para reparaciones de mayor coste.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  ¿Necesito cita previa?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  Puedes venir sin cita previa, pero recomendamos contactar con antelación para asegurar la disponibilidad de repuestos y reducir los tiempos de espera.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage;