const connection = require('../db/connection');

const getAllSales = async () => {
  const query = `
    SELECT sales_products.sale_id as saleId, sales.date, sales_products.product_id as productId, 
    sales_products.quantity
    FROM sales_products
    INNER JOIN sales
    ON sales.id = sales_products.sale_id
    ORDER BY sales_products.sale_id, sales_products.product_id;`;
  const [sales] = await connection.execute(query);
  return sales;
};

const getSaleById = async (id) => {
  const query = `
    SELECT sales.date, sales_products.product_id as productId, sales_products.quantity
    FROM sales_products
    INNER JOIN sales
    ON sales.id = sales_products.sale_id
    WHERE sales_products.sale_id = ?
    ORDER BY sales_products.sale_id, sales_products.product_id`;
  const [sale] = await connection.execute(query, [id]);
  return sale;
};

const addSalesProducts = async (product, insertId) => {
  const { productId, quantity } = product;
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)';
  connection.execute(query, [insertId, productId, quantity]);
};

const addNewSale = async (sale) => {
  const query = 'INSERT INTO sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);
  await Promise.all(sale.map((product) => addSalesProducts(product, insertId)));
  return { id: insertId };
};

const addProductsSolds = async (product) => {
  const { saleId, productId, quantity } = product;
  const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)';
  await connection.execute(query, [saleId, productId, quantity]);
  return { productId, quantity };
};

const deleteSale = async (id) => {
  const query = 'DELETE FROM sales WHERE id = ?';
  await connection.execute(query, [id]);
  return true;
};

module.exports = {
  getAllSales,
  getSaleById,
  addNewSale,
  addProductsSolds,
  deleteSale,
};