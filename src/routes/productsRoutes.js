const express = require('express');
const productsController = require('../controllers/productsController');
const { validateProductName } = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/:id', productsController.getProductById);
router.get('/', productsController.getAllProducts);
router.post('/', validateProductName, productsController.addNewProduct);

module.exports = router;