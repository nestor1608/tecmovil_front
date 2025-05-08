import React from "react";
import { 
  Box, 
  Typography, 
  Container, 
  styled,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const BrandLogo = styled('img')(({ theme }) => ({
  height: 48,
  maxWidth: 120,
  objectFit: 'contain',
  filter: 'grayscale(100%)',
  opacity: 0.7,
  transition: 'all 0.3s ease',
  '&:hover': {
    filter: 'grayscale(0%)',
    opacity: 1,
    transform: 'scale(1.05)'
  },
  [theme.breakpoints.up('md')]: {
    height: 56,
    maxWidth: 140,
  }
}));

const BrandItem = styled(Box)({
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 8,
  outline: 'none',
});

const BrandSlider = ({ brands }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 3 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <StyledSection>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          align="center" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            mb: 6
          }}
        >
          Trabajamos con todas las marcas
        </Typography>
        
        <Slider {...settings}>
          {brands.map((brand, index) => (
            <BrandItem key={index}>
              <BrandLogo 
                src={brand.logoUrl} 
                alt={`Logo de ${brand.name}`} 
              />
            </BrandItem>
          ))}
        </Slider>
      </Container>
    </StyledSection>
  );
};

export default BrandSlider;