const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return { status: 200, sales };
};

module.exports = {
  getAllSales,
};