const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/get/products', productController.getProducts);
router.post('/add/products', productController.addProduct);
router.get('/products', productController.getProducts);
router.post('/products', productController.addProduct);
router.get('/products/:id', productController.getProductById);
router.delete('/products/:id', productController.deleteProduct);
router.route('/')
  .get(productController.getProducts)
  .post(productController.addProduct);
router.get('/:id', productController.getProductById);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
