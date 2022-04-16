const { getProducts, addToCart, getCartItem, checkout } = require('../Service/product.service');

const getProduct = async(req, res) => {
    try {
        const search = req.query.search;
        const productId = req.query.productId;
        const products = await getProducts(search, productId);
        res.json({ status: true, products});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const getCart = async(req, res) => {
    try {
        const userId = res.locals.userId;
        const carts = await getCartItem(userId);
        res.json({ status: true, carts});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const addCart = async(req, res) => {
    try {
        const userId = res.locals.userId;
        const productId = req.body.productId;
        const count = req.body.count;
        const carts = await addToCart(userId, productId, count);
        res.json({ status: true, carts: carts});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

const checkoutItem = async(req, res) => {
    try {
        const userId = res.locals.userId;
        const carts = await checkout(userId);
        res.json({ status: true, carts});
        return;
    }
    catch (error) {
        console.log(error)
        res.json(error);
    }
}

module.exports = {
    getProduct,
    addCart,
    getCart,
    checkoutItem
}