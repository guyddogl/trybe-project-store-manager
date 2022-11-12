const productsModel = require('../models/productsModel');

const validateProductToDelete = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsModel.getProductById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateProductToDelete,
};