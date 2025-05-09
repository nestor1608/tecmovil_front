import { ArrowRight, Smartphone, Battery, Wrench, Zap, Clock, Shield, RefreshCw, Database, Star, Check, Award, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Chip,
  Divider,
  Icon,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import BrandSlider from '../components/BrandSlider';

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6]
  }
}));

const StatCard = ({ value, label, delay }) => (
  <StyledCard
    sx={{
      textAlign: 'center',
      color: "#0284c7",
      py: 4,
      animation: 'fadeIn 0.5s ease-in-out',
      animationDelay: `${delay}ms`,
      '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    }}
  >
    <CardContent>
      <Typography variant="h3" component="div" color="primary.main" gutterBottom>
        {value}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {label}
      </Typography>
    </CardContent>
  </StyledCard>
);

const FeatureItem = ({ icon: Icon, title, description }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', mb: 4 }}>
      <Box sx={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 48,
        borderRadius: 1,
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        mr: 3
      }}>
        <Icon size={24} />
      </Box>
      <Box>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Reparación de Pantallas',
      description: 'Reemplazamos pantallas rotas o con fallos en tu dispositivo con repuestos de alta calidad.',
      icon: Smartphone
    },
    {
      title: 'Cambio de Baterías',
      description: 'Baterías nuevas y originales para devolver la autonomía a tu dispositivo móvil.',
      icon: Battery
    },
    {
      title: 'Problemas de Carga',
      description: 'Reparamos puertos de carga dañados y solucionamos problemas de conectores.',
      icon: Zap
    },
    {
      title: 'Reparación de Cámaras',
      description: 'Arreglamos cámaras delanteras y traseras para que puedas seguir capturando momentos.',
      icon: RefreshCw
    },
    {
      title: 'Recuperación de Datos',
      description: 'Recuperamos tus fotos, contactos y datos importantes de dispositivos dañados.',
      icon: Database
    },
    {
      title: 'Servicio Rápido',
      description: 'La mayoría de nuestras reparaciones se realizan en menos de 60 minutos.',
      icon: Clock
    },
  ];

  const testimonials = [
    {
      name: 'María López',
      content: 'Excelente servicio. Arreglaron la pantalla de mi iPhone en menos de una hora y a un precio muy razonable. El acabado es perfecto.',
      rating: 5,
      date: '15 Mar 2025',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      content: 'Mi Samsung tenía problemas de batería y en TEC Movil lo solucionaron rápidamente. Ahora dura todo el día sin problemas.',
      rating: 5,
      date: '2 Feb 2025',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Ana Martínez',
      content: 'Muy profesionales. Tenían el repuesto que necesitaba para mi Xiaomi y la reparación fue impecable. Recomendable.',
      rating: 4,
      date: '28 Ene 2025',
      avatar: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  const brands = [
    {
      name: 'Apple',
      logoUrl: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Samsung',
      logoUrl: 'https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Xiaomi',
      logoUrl: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Huawei',
      logoUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Google',
      logoUrl: 'https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      <Hero
        title="Servicio profesional de reparación de móviles"
        subtitle="En TEC Movil ofrecemos reparaciones rápidas y de calidad para todas las marcas de smartphones. Repuestos originales y garantía en todas nuestras reparaciones."
        imageUrl="/img/tecnomivl-img.webp"
        primaryButtonText="Solicitar Reparación"
        primaryButtonLink="/contacto"
        secondaryButtonText="Ver Repuestos"
        secondaryButtonLink="/tienda"
      />

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: '#e5e7eb' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard value="+5000" label="Reparaciones realizadas" delay={0} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard value="98%" label="Clientes satisfechos" delay={100} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard value="10+" label="Años de experiencia" delay={200} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <StatCard value="12" label="Meses de garantía" delay={300} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="servicios" sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Nuestros Servicios de Reparación
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ofrecemos una amplia gama de servicios de reparación para todo tipo de dispositivos móviles.
              Utilizamos repuestos de alta calidad y nuestros técnicos están altamente cualificados.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: 'flex' }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </Grid>
            ))}
          </Grid>


          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Button
              component={Link}
              to="/contacto"
              variant="contained"
              size="large"
              color="#0284c7"
              endIcon={<ArrowRight size={20} />}
            >
              Solicitar Presupuesto
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ py: 10, backgroundColor: '#e5e7eb' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, sm: 12, md: 6 }} >
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                ¿Por qué elegir TEC Movil?
              </Typography>

              <FeatureItem
                icon={Wrench}
                title="Técnicos Expertos"
                description="Nuestros técnicos están certificados y cuentan con años de experiencia en reparación de dispositivos móviles."
              />

              <FeatureItem
                icon={Shield}
                title="Garantía en Reparaciones"
                description="Todas nuestras reparaciones incluyen garantía de 12 meses. Tu tranquilidad es nuestra prioridad."
              />

              <FeatureItem
                icon={Clock}
                title="Servicio Rápido"
                description="La mayoría de nuestras reparaciones se realizan en el mismo día, muchas en menos de una hora."
              />

              <Button
                component={Link}
                to="/contacto"
                color="primary"
                endIcon={<ArrowRight size={20} />}
                sx={{ mt: 2 }}
              >
                Contacta con nosotros
              </Button>
            </Grid>

            <Grid size={{ xs: 12, sm: 12, md: 6 }} sx={{ position: 'relative', display: { xs: 'none', md: 'block' }}} >
              <Box sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 6,
                position: 'relative',
                aspectRatio: '4/3'
              }}>
                <img
                  src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Técnico reparando un dispositivo móvil"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Box sx={{
                position: 'absolute',
                bottom: -20,
                left: -20,
                backgroundColor: 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                maxWidth: 300,
                display: { xs: 'none', md: 'block' }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={theme.palette.warning.main} color={theme.palette.warning.main} />
                  ))}
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                    4.9/5
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  "Más de 500 reseñas positivas nuestras redes sociales"
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Brand Slider */}
      <BrandSlider brands={brands} />

      {/* Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', mb: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Lo que dicen nuestros clientes
            </Typography>
            <Typography variant="body1" color="text.secondary">
              La satisfacción de nuestros clientes es nuestra mejor recompensa.
              Estas son algunas de las opiniones de quienes han confiado en nosotros.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 4, md: 12 }} key={index}>
                <TestimonialCard
                  name={testimonial.name}
                  content={testimonial.content}
                  rating={testimonial.rating}
                  date={testimonial.date}
                  avatar={testimonial.avatar}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Button
              component={Link}
              to="/contacto"
              variant="contained"
              size="large"
              endIcon={<ArrowRight size={20} />}
              sx={{
                backgroundColor:"#0284c7"}}
            >
              Contactar Ahora
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 10, backgroundColor: '#0369a1', color: 'primary.contrastText' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              ¿Tu móvil necesita una reparación?
            </Typography>
            <Typography variant="body1" sx={{ mb: 6, maxWidth: 600, mx: 'auto', opacity: 0.9 }}>
              No pierdas más tiempo con un dispositivo que no funciona correctamente.
              En TEC Movil ofrecemos diagnóstico gratuito y presupuesto sin compromiso.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/contacto"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'background.paper',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'primary.contrastText'
                  }
                }}
              >
                Solicitar presupuesto
              </Button>
              <Button
                component={Link}
                to="/tienda"
                variant="outlined"
                size="large"
                sx={{
                  color: 'primary.contrastText',
                  borderColor: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    borderColor: 'primary.contrastText'
                  }
                }}
              >
                Ver repuestos disponibles
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="sobre-nosotros" sx={{ py: 10, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 2, md: 1 }}>
              <Box sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 6,
                aspectRatio: '4/3',
                display: { xs: 'none', md: 'block' }
              }}>
                <img
                  src="https://images.pexels.com/photos/6519672/pexels-photo-6519672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Equipo de TEC Movil"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 1, md: 2 }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Sobre TEC Movil
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                TEC Movil nació en 2015 con la misión de ofrecer un servicio de reparación de móviles rápido,
                profesional y a precios justos. Desde entonces, hemos crecido hasta convertirnos en un referente
                en el sector de la reparación de dispositivos móviles.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Nuestro equipo está formado por técnicos certificados con amplia experiencia en la reparación
                de todo tipo de smartphones y tablets. Utilizamos herramientas de última generación y repuestos
                de la más alta calidad para garantizar el mejor resultado.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                En TEC Movil no solo reparamos dispositivos, creamos relaciones duraderas con nuestros clientes
                basadas en la confianza y la calidad de nuestro trabajo.
              </Typography>

              <Button
                component={Link}
                to="/contacto"
                variant="contained"
                size="large"
                sx={{ mt: 2, backgroundColor:"#0284c7"}}
              >
                Conoce más sobre nosotros
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;