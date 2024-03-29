const express = require('express');
const productsController = require('../controllers/productsController');
const { validateProductName } = require('../middlewares/validateProductName');
const { validateProductToDelete } = require('../middlewares/validateProductToDelete');

const router = express.Router();

router.get('/search', productsController.searchProducts);

router.get('/:id', productsController.getProductById);

router.get('/', productsController.getAllProducts);

router.post('/', validateProductName, productsController.addNewProduct);

router.put('/:id', validateProductName, productsController.updateProduct);

router.delete('/:id', validateProductToDelete, productsController.deleteProduct);

module.exports = router;