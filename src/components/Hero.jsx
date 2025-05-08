import React from 'react';
import { ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  backgroundColor: 'transparent', // o elimina esta línea si no es necesario
}));

const BackgroundImage = styled(Box)({
  position: 'fixed',
  inset: 0,
  zIndex: -1, // Asegura que quede detrás del contenido
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});


const GradientOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to right, ${theme.palette.secondary.dark}90, ${theme.palette.secondary.dark}80)`,
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: theme.spacing(8, 2),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12, 2),
  },
}));

const Hero = ({
  title,
  subtitle,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HeroContainer>
      <BackgroundImage>
        <img 
          src={imageUrl} 
          alt="TEC Movil Hero Background" 
          loading="lazy"
        />
        <GradientOverlay />
      </BackgroundImage>
      
      <ContentContainer>
        <Box sx={{ 
          maxWidth: '800px',
          animation: 'fadeIn 0.5s ease-in',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          }
        }}>
          <Typography 
            variant={isMobile ? 'h3' : 'h2'} 
            component="h1" 
            color="white" 
            gutterBottom
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 4
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant={isMobile ? 'body1' : 'h6'} 
            color="primary.contrastText" // Usando tu color de Tailwind
            paragraph
            sx={{
              mb: 6,
              lineHeight: 1.6,
              opacity: 0.9
            }}
          >
            {subtitle}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button
              component={Link}
              to={primaryButtonLink}
              variant="contained"
              
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor:"#0284c7",
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[4],
                },
                transition: 'all 0.3s ease',
              }}
            >
              {primaryButtonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                component={Link}
                to={secondaryButtonLink}
                variant="outlined"
                color="dark"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: 600,
                  backgroundColor: 'rgba(255, 255, 255, 0.99)',
                  borderWidth: '2px',
                  '&:hover': {
                    borderWidth: '2px',
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {secondaryButtonText}
              </Button>
            )}
          </Box>
        </Box>
      </ContentContainer>
    </HeroContainer>
  );
};

export default Hero;