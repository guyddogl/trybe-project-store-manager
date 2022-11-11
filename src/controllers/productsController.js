const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const { status, products } = await productsService.getAllProducts();
  res.status(status).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { status, message, product } = await productsService.getProductById(id);
  if (message) return res.status(status).json({ message });
  res.status(status).json(product);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;
  const { status, newProductCreated } = await productsService.addNewProduct(name);
  res.status(status).json(newProductCreated);
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
};