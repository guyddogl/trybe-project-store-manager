const express = require('express');
const salesController = require('../controllers/salesController');
const { validateProductId,
  validateProductQuantity,
  validateIfProductExist,
  validateIfSaleExist } = require('../middlewares/validateProductsSale');

const router = express.Router();

router.get('/:id', salesController.getSaleById);

router.get('/', salesController.getAllSales);

router.post('/', validateProductId, validateIfProductExist, validateProductQuantity,
  salesController.addNewSale);

router.delete('/:id', validateIfSaleExist, salesController.deleteSale);

module.exports = router;