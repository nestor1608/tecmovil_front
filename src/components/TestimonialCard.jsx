import React from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Card, 
  CardContent, 
  styled 
} from '@mui/material';
import { Star, StarHalf, StarOutline } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
}));

const RatingContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 16,
});

const TestimonialText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: 24,
  flexGrow: 1,
  fontStyle: 'italic',
  lineHeight: 1.6,
}));

const CustomerInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginTop: 'auto',
});

const CustomerAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  marginRight: 16,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.dark,
}));

const CustomerDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const CustomerName = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.text.primary,
}));

const TestimonialDate = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} color="warning" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(<StarHalf key={i} color="primary" />);
    } else {
      stars.push(<StarOutline key={i} color="primary" />);
    }
  }

  return stars;
};

const TestimonialCard = ({ name, content, rating, date, imageUrl }) => {
  return (
    <StyledCard elevation={3}>
      <StyledCardContent>
        <RatingContainer>
          {renderStars(rating)}
        </RatingContainer>
        
        <TestimonialText variant="body1">
          {content}
        </TestimonialText>
        
        <CustomerInfo>
          {imageUrl ? (
            <CustomerAvatar src={imageUrl} alt={name} />
          ) : (
            <CustomerAvatar>
              {name.charAt(0).toUpperCase()}
            </CustomerAvatar>
          )}
          <CustomerDetails>
            <CustomerName variant="subtitle1">
              {name}
            </CustomerName>
            <TestimonialDate variant="body2">
              {date}
            </TestimonialDate>
          </CustomerDetails>
        </CustomerInfo>
      </StyledCardContent>
    </StyledCard>
  );
};

export default TestimonialCard;