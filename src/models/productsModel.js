const connection = require('../db/connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM products ORDER BY id ASC';
  const [products] = await connection.execute(query);
  return products;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE id = ?';
  const [[product]] = await connection.execute(query, [id]);
  console.log(product);
  return product;
};

const addNewProduct = async (name) => {
  const query = 'INSERT INTO products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  return insertId;
};

const updateProduct = async (id, name) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
  return true;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [id]);
  return true;
};

const searchProducts = async (q) => {
  const search = `%${q}%`;
  const query = 'SELECT * FROM products WHERE name LIKE ?';
  const [products] = await connection.execute(query, [search]);
  return products;
};
  
module.exports = {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};