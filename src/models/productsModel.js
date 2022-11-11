const connection = require('../db/connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM products';
  const [products] = await connection.execute(query);
  return products;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
  return product;
};

const addNewProduct = async (name) => {
  const query = 'INSERT INTO products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return { id: insertId };
};

module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
};