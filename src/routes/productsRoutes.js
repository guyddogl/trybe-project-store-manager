const express = require('express');
const productsController = require('../controllers/productsController');
const { validateProductName } = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/:id', productsController.getProductById);
router.get('/', productsController.getAllProducts);
router.post('/', validateProductName, productsController.addNewProduct);
router.put('/:id', validateProductName, productsController.updateProduct);

module.exports = router;