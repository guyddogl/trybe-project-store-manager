const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const { status, sales } = await salesService.getAllSales();
  res.status(status).json(sales);
};

const addNewSale = async (req, res) => {
  const { name } = req.body;
  const { status, newSaleCreated } = await salesService.addNewSale(name);
  res.status(status).json(newSaleCreated);
};

module.exports = {
  getAllSales,
  addNewSale,
};