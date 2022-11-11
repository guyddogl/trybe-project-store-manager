const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const { status, sales } = await salesService.getAllSales();
  res.status(status).json(sales);
};

module.exports = {
  getAllSales,
};