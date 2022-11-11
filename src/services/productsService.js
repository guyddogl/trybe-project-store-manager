const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  const sorted = products.sort((a, b) => a.id - b.id);
  return { status: 200, products: sorted };
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (product.length === 0) return { status: 404, message: 'Product not found' };
  return { status: 200, product: product[0] };
};

module.exports = {
  getAllProducts,
  getProductById,
};