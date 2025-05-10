// productServices.js
import axios from 'axios';

// Configuración de Shopify (existente)
const SHOP_NAME = import.meta.env.VITE_SHOPIFY_SHOP_NAME;
const ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN;
const API_VERSION = import.meta.env.VITE_SHOPIFY_API_VERSION;

const shopifyClient = axios.create({
    baseURL: `https://${SHOP_NAME}.myshopify.com/api/${API_VERSION}`,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN
    }
});

// Configuración de la API local
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://tec-movilback-y99h.onrender.com';
const API_URL = `${API_BASE_URL}/api`;

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Función para enviar el formulario de contacto
export const sendContactForm = async (formData) => {
    try {
        const response = await apiClient.post('/contact/', formData);
        return response.data;
    } catch (error) {
        console.error('Error sending contact form:', error);
        throw error;
    }
};

export const fetchAllProducts = async () => {
  if (!SHOP_NAME || !ACCESS_TOKEN || !API_VERSION) {
      throw new Error("Faltan variables de entorno de Shopify");
  }

  let allProducts = [];
  let hasNextPage = true;
  let endCursor = null;

  while (hasNextPage) {
      const query = `
      {
          products(first: 100${endCursor ? `, after: "${endCursor}"` : ''}) {
              edges {
                  node {
                      id
                      title
                      description
                      featuredImage {
                          url
                          altText
                      }
                      variants(first: 10) {
                          edges {
                              node {
                                  id
                                  title
                                  price {
                                      amount
                                      currencyCode
                                  }
                              }
                          }
                      }
                  }
              }
              pageInfo {
                  hasNextPage
                  endCursor
              }
          }
      }`;

      try {
          const response = await shopifyClient.post('/graphql.json', { query });
          const products = response.data.data.products.edges.map(edge => ({
              id: edge.node.id,
              title: edge.node.title.replace(/^Modulo\s*/i, 'Reparación de módulo '),
              description: edge.node.description || 'Reparación profesional de módulo de pantalla',
              imageUrl: edge.node.featuredImage?.url || 'https://via.placeholder.com/300',
              price: parseFloat(edge.node.variants.edges[0].node.price.amount),
              currency: edge.node.variants.edges[0].node.price.currencyCode,
              inStock: parseFloat(edge.node.variants.edges[0].node.price.amount) > 0
          }));

          allProducts = [...allProducts, ...products];
          hasNextPage = response.data.data.products.pageInfo.hasNextPage;
          endCursor = response.data.data.products.pageInfo.endCursor;
      } catch (error) {
          console.error('Error fetching products from Shopify:', error);
          break;
      }
  }

  return allProducts;
};

export const getPaginatedProducts = (products, page = 1, pageSize = 20) => {
  const startIndex = (page - 1) * pageSize;
  return products.slice(startIndex, startIndex + pageSize);
};

export const filterProducts = (products, searchTerm) => {
  if (!searchTerm) return products;

  return products.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};