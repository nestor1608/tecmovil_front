import axios from 'axios';

const SHOP_NAME = import.meta.env.VITE_SHOPIFY_SHOP_NAME;  // Usa import.meta.env en Vite
const ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_ACCESS_TOKEN;
const API_VERSION = import.meta.env.VITE_SHOPIFY_API_VERSION;

const shopifyClient = axios.create({
    baseURL: `https://${SHOP_NAME}.myshopify.com/api/${API_VERSION}`,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN
    }

})


export const fetchProducts = async () => {
    if (!SHOP_NAME || !ACCESS_TOKEN || !API_VERSION) {
        throw new Error("Faltan variables de entorno de Shopify");
    }
    const query = `
    {
      products(first: 100) {
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
    }
  `;

    try {
        const response = await shopifyClient.post('/graphql.json', { query });
        return response.data.data.products.edges.map(edge => ({
            id: edge.node.id,
            title: edge.node.title.replace(/^Modulo\s*/i, 'Reparación de módulo '),
            description: edge.node.description || 'Reparación profesional de módulo de pantalla',
            imageUrl: edge.node.featuredImage?.url || 'https://via.placeholder.com/300',
            price: parseFloat(edge.node.variants.edges[0].node.price.amount),
            currency: edge.node.variants.edges[0].node.price.currencyCode,
            inStock: parseFloat(edge.node.variants.edges[0].node.price.amount) > 0
        }));
    } catch (error) {
        console.error('Error fetching products from Shopify:', error);
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