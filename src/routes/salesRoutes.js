const express = require('express');
const salesController = require('../controllers/salesController');
const { validateProductId,
  validateProductQuantity,
  validateIfProductExist } = require('../middlewares/validateProductsSale');

const router = express.Router();

router.get('/', salesController.getAllSales);
router.post('/', validateProductId, validateIfProductExist, 
validateProductQuantity, salesController.addNewSale);

module.exports = router;