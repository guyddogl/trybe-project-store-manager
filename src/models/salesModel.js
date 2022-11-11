const connection = require('../db/connection');

const getAllSales = async () => {
  const query = 'SELECT * FROM sales';
  const [sales] = await connection.execute(query);
  return sales;
};

const addNewSale = async () => {
  const query = 'INSERT INTO sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);
  return { id: insertId };
};

module.exports = {
  getAllSales,
  addNewSale,
};