import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  styled 
} from '@mui/material';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <StyledCard elevation={3}>
        <CardContent>
          <IconContainer>
            <Icon size={24} />
          </IconContainer>
          
          <ServiceTitle variant="h5">
            {title}
          </ServiceTitle>
          
          <ServiceDescription variant="body1">
            {description}
          </ServiceDescription>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

export default ServiceCard;