const express = require('express');
const { getProduct, addCart, getCart, checkoutItem } = require('../Controller/product.controller');
const isAuthenticated  = require('../Middleware/auth.middleware');
const router = express.Router();

router.get('/products', getProduct);
router.post('/cart', isAuthenticated, addCart);
router.get('/cart', isAuthenticated, getCart);
router.put('/checkout', isAuthenticated, checkoutItem);

module.exports = router;