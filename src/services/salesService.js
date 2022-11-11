const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return { status: 200, sales };
};

const addNewSale = async (name) => {
  const { id } = await salesModel.addNewSale(name);
  return { status: 201, newSaleCreated: { id, name } };
};

module.exports = {
  getAllSales,
  addNewSale,
};