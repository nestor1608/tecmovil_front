// api.js
import axios from 'axios';

const djangoClient = axios.create({
  baseURL: 'https://tec-movilback.onrender.com', // Asegúrate de que esta URL coincida con tu servidor Django
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchProducts = async () => {
  try {
    const response = await djangoClient.get('api/shopify/products/');
    return response.data.map(product => ({
      ...product,
      // Asegúrate de que los datos ya vienen formateados desde Django
      title: product.title.replace(/^Modulo\s*/i, 'Reparación de módulo '),
      description: product.description || 'Reparación profesional de módulo de pantalla',
      imageUrl: product.imageUrl || 'https://via.placeholder.com/300',
      inStock: product.price > 0
    }));
  } catch (error) {
    console.error('Error fetching products from Django API:', error);
    return [];
  }
};

export const filterProducts = (products, searchTerm) => {
  if (!searchTerm) return products;
  
  return products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};