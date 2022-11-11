const connection = require('../db/connection');

const getAllSales = async () => {
  const query = 'SELECT * FROM sales';
  const [sales] = await connection.execute(query);
  return sales;
};

module.exports = {
  getAllSales,
};