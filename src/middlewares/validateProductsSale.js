const productsModel = require('../models/productsModel');
const salesModel = require('../models/salesModel');

const validateProductId = (req, res, next) => {
  const { body } = req;
  const hasId = body.every((product) => product.productId);
  if (!hasId) return res.status(400).json({ message: '"productId" is required' });
  next();
};

const validateIfProductExist = async (req, res, next) => {
  const { body } = req;
  const productsInDB = await productsModel.getAllProducts();
  const idsProductsInDB = productsInDB.map((e) => e.id);
  const isInArray = body.every((newProduct) => idsProductsInDB
    .includes(newProduct.productId));
  if (!isInArray) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const validateProductQuantity = (req, res, next) => {
  const { body } = req;
  const hasQuantity = body.every((product) => product.quantity || product.quantity === 0);
  if (!hasQuantity) return res.status(400).json({ message: '"quantity" is required' });
  const minimumQuantity = body.every((product) => product.quantity > 0);
  if (!minimumQuantity) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validateIfSaleExist = async (req, res, next) => {
  const { id } = req.params;
  const product = await salesModel.getSaleById(id);
  if (product.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  next();
};

module.exports = {
  validateProductId,
  validateIfProductExist,
  validateProductQuantity,
  validateIfSaleExist,
};