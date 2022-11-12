const connection = require('../db/connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM products ORDER BY id ASC';
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

const updateProduct = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  return true;
};
  
module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
};