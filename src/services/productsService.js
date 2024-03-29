const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();
  return { status: 200, products };
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) return { status: 404, message: 'Product not found' };
  return { status: 200, product };
};

const addNewProduct = async (name) => {
  const insertId = await productsModel.addNewProduct(name);
  return { status: 201, newProductCreated: { id: insertId, name } };
};

const updateProduct = async (id, name) => {
  const findProduct = await productsModel.getProductById(id);
  if (!findProduct) return { status: 404, message: 'Product not found' };
  await productsModel.updateProduct(id, name);
  return { status: 200, id, name };
};

const deleteProduct = async (id) => {
  await productsModel.deleteProduct(id);
  return { status: 204 };
};

const searchProducts = async (q) => {
  const products = await productsModel.searchProducts(q);
  return { status: 200, products };
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};