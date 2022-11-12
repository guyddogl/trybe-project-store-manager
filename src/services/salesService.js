const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
  return { status: 200, sales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (sale.length === 0) return { status: 404, message: 'Sale not found' };
  return { status: 200, sale };
};

const addNewSale = async (sale) => {
  const { id } = await salesModel.addNewSale(sale);
  return { status: 201, id };
};

module.exports = {
  getAllSales,
  getSaleById,
  addNewSale,
};