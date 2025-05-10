import { Card, CardMedia, CardContent, Typography, Chip, Button, Divider, Box, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Distribuye el espacio entre los elementos
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6]
  }
}));

const ProductImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: 200,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f5f5'
});

const ProductImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  maxWidth: '100%',
  maxHeight: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
});

const ProductCard = ({
  title,
  description,
  price,
  imageUrl,
  currency,
  inStock,
  isIllustrative,
  sx
}) => {
  return (
    <StyledCard sx={sx}>
      <Box>
        <ProductImageContainer>
          <ProductImage
            src={imageUrl}
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/repair-placeholder.jpg';
            }}
          />

          <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
            <Chip
              label={inStock ? 'En Stock' : 'Agotado'}
              color={inStock ? 'success' : 'error'}
              size="small"
            />
          </Box>

          {isIllustrative && (
            <Tooltip title="Imagen ilustrativa - No corresponde al módulo original" arrow>
              <Box sx={{
                position: 'absolute',
                bottom: 8,
                left: 8,
                bgcolor: 'rgba(0,0,0,0.7)',
                color: 'white',
                px: 1,
                py: 0.5,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center'
              }}>
                <InfoOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="caption">Ilustrativa</Typography>
              </Box>
            </Tooltip>
          )}
        </ProductImageContainer>

        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h3"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 3, // Máximo de 3 líneas
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '3.6em', // Altura mínima para 2 líneas (ajusta según tu tipografía)
              lineHeight: '1.2em', // Altura de línea compacta
            }}
          >
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {description}
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              Precio total:
            </Typography>
            <Typography variant="h6" color="primary">
              {new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: currency || 'ARS'
              }).format(price)}
            </Typography>
          </Box>
        </CardContent>
      </Box>

      {/* Botón fijo en la parte inferior */}
      {/* <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          disabled={!inStock}
          sx={{ 
            mt: 'auto', // Empuja el botón hacia abajo
            alignSelf: 'flex-end' // Alinea al final del contenedor flex
          }}
        >
          {inStock ? 'Solicitar Reparación' : 'No Disponible'}
        </Button>
      </Box> */}
    </StyledCard>
  );
};

export default ProductCard;