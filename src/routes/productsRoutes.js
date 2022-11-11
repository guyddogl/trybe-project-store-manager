const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/:id', productsController.getProductById);
router.get('/', productsController.getAllProducts);

module.exports = router;