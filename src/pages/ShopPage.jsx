import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  MenuItem
} from '@mui/material';
import { Search, FilterList as FilterListIcon, Close as CloseIcon } from '@mui/icons-material';
import { fetchAllProducts, getPaginatedProducts, filterProducts } from '../services/productServices';
import ProductCard from '../components/ProductCard';

const DEFAULT_IMAGE = '/img/modulo_generico.webp';
const ITEMS_PER_PAGE = 20;

const ShopPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        let productsData = await fetchAllProducts();
        
        // Filtrar productos sin precio o con precio 0
        productsData = productsData.filter(product => product.price > 0);
        
        productsData = productsData.map(product => {
          const isPlaceholder = !product.imageUrl || product.imageUrl === "https://via.placeholder.com/300";
          return {
            ...product,
            imageUrl: isPlaceholder ? DEFAULT_IMAGE : product.imageUrl,
            isIllustrative: isPlaceholder
          };
        });

        setAllProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = filterProducts(allProducts, searchTerm);

    if (selectedBrand) {
      filtered = filtered.filter(product =>
        product.brand?.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product =>
        product.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedBrand, selectedCategory, allProducts]);

  useEffect(() => {
    setDisplayedProducts(getPaginatedProducts(filteredProducts, currentPage, ITEMS_PER_PAGE));
  }, [filteredProducts, currentPage]);

  const brands = [...new Set(allProducts.map(product => product.brand).filter(Boolean))];
  const categories = [...new Set(allProducts.map(product => product.category).filter(Boolean))];

  const resetFilters = () => {
    setSelectedBrand('');
    setSelectedCategory('');
    setSearchTerm('');
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const hasActiveFilters = searchTerm || selectedBrand || selectedCategory;
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6">Cargando productos...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box sx={{
        bgcolor: 'primary.dark',
        py: 8,
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container maxWidth="lg">
          <Box sx={{
            maxWidth: 800,
            mx: 'auto',
            textAlign: 'center',
            color: 'common.white'
          }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Servicios de Reparación
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, color: 'primary.light' }}>
              Ofrecemos reparaciones profesionales para todo tipo de dispositivos móviles.
              Todos nuestros servicios incluyen garantía y repuestos de alta calidad.
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Buscar servicios por modelo, marca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                '& .MuiOutlinedInput-root': {
                  color: 'common.white',
                  '& fieldset': {
                    borderColor: 'primary.light',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'primary.light',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: 'primary.light' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={toggleFilters} sx={{ color: 'primary.light' }}>
                      <FilterListIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Main content */}
      <Box sx={{ py: 6, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            {/* Filters Section */}
            {showFilters && (
              <Card sx={{ mb: 4, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2
                  }}>
                    <Typography variant="h6" component="h3">
                      Filtros
                    </Typography>
                    <IconButton onClick={toggleFilters}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                  <Grid container spacing={3}>
                    <Grid size={{xs:12, md:6}}>
                      <TextField
                        select
                        fullWidth
                        label="Marca"
                        value={selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        variant="outlined"
                      >
                        <MenuItem value="">Todas las marcas</MenuItem>
                        {brands.map((brand) => (
                          <MenuItem key={brand} value={brand}>{brand}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid size={{xs:12, md:6}}>
                      <TextField
                        select
                        fullWidth
                        label="Categoría"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        variant="outlined"
                      >
                        <MenuItem value="">Todas las categorías</MenuItem>
                        {categories.map((category) => (
                          <MenuItem key={category} value={category}>{category}</MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      onClick={resetFilters}
                      color="primary"
                      variant="text"
                    >
                      Limpiar filtros
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            )}

            {/* Active Filters */}
            {hasActiveFilters && (
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 1,
                mb: 3
              }}>
                <Typography variant="body2" color="text.secondary">
                  Filtros activos:
                </Typography>
                {searchTerm && (
                  <Chip
                    label={`Búsqueda: ${searchTerm}`}
                    onDelete={() => setSearchTerm('')}
                    deleteIcon={<CloseIcon fontSize="small" />}
                    sx={{ bgcolor: 'primary.lighter' }}
                  />
                )}
                {selectedBrand && (
                  <Chip
                    label={`Marca: ${selectedBrand}`}
                    onDelete={() => setSelectedBrand('')}
                    deleteIcon={<CloseIcon fontSize="small" />}
                    sx={{ bgcolor: 'primary.lighter' }}
                  />
                )}
                {selectedCategory && (
                  <Chip
                    label={`Categoría: ${selectedCategory}`}
                    onDelete={() => setSelectedCategory('')}
                    deleteIcon={<CloseIcon fontSize="small" />}
                    sx={{ bgcolor: 'primary.lighter' }}
                  />
                )}
                <Button
                  onClick={resetFilters}
                  size="small"
                  sx={{ ml: 1 }}
                >
                  Limpiar todos
                </Button>
              </Box>
            )}

            {/* Results Count */}
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Mostrando {displayedProducts.length} de {filteredProducts.length} {filteredProducts.length === 1 ? 'servicio' : 'servicios'}
              {hasActiveFilters ? ' con los filtros seleccionados' : ''}
            </Typography>
          </Box>

          {/* Products Grid */}
          {displayedProducts.length > 0 ? (
            <>
              <Grid container spacing={4}>
                {displayedProducts.map((product) => (
                  <Grid key={product.id}size={{xs:12, md:4,sm:6,lg:3}}  >
                    <Box sx={{ height: '100%', display: 'flex' }}>
                      <ProductCard
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        currency={product.currency}
                        inStock={product.inStock}
                        isIllustrative={product.isIllustrative}
                        sx={{ height: '100%', width: '100%' }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Pagination Controls */}
              {filteredProducts.length > ITEMS_PER_PAGE && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    sx={{ mr: 2 }}
                  >
                    Anterior
                  </Button>
                  <Typography sx={{ mx: 2, alignSelf: 'center' }}>
                    Página {currentPage} de {totalPages}
                  </Typography>
                  <Button
                    disabled={currentPage >= totalPages}
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    sx={{ ml: 2 }}
                  >
                    Siguiente
                  </Button>
                </Box>
              )}
            </>
          ) : (
            <Card sx={{
              textAlign: 'center',
              p: 6,
              boxShadow: 3
            }}>
              <Box sx={{ mb: 3 }}>
                <Search sx={{ fontSize: 60, color: 'grey.400' }} />
              </Box>
              <Typography variant="h5" gutterBottom>
                No se encontraron servicios
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                No hemos encontrado servicios que coincidan con tu búsqueda. Prueba a cambiar los filtros o a buscar con otros términos.
              </Typography>
              <Button
                onClick={resetFilters}
                variant="contained"
                color="primary"
              >
                Ver todos los servicios
              </Button>
            </Card>
          )}

          {/* CTA Section */}
          <Card sx={{
            mt: 8,
            p: 6,
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'common.white',
            boxShadow: 4
          }}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
              ¿No encuentras el servicio que necesitas?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto', opacity: 0.9 }}>
              Si no encuentras el servicio específico que necesitas, contáctanos directamente.
              Podemos ayudarte con prácticamente cualquier reparación de dispositivos móviles.
            </Typography>
            <Button
              href="/contacto"
              variant="contained"
              sx={{
                bgcolor: 'common.white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
            >
              Contactar ahora
            </Button>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default ShopPage;