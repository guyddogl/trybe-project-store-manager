const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return { status: 200, products };
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (product.length === 0) return { status: 404, message: 'Product not found' };
  return { status: 200, product: product[0] };
};

const addNewProduct = async (name) => {
  const { id } = await productsModel.addNewProduct(name);
  return { status: 201, newProductCreated: { id, name } };
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
};