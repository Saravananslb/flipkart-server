const productSchema = require('../Models/product.model');
const ordersSchema = require('../Models/orders.model');
const { endOfDay, startOfDay } = require('date-fns');

const getProducts = async(category, productId) => {
    if (productId) {
        const products = await productSchema.findById(productId);
        return products
    }
    const products = await productSchema.find();
    const prod = products.filter(item => {
        if (item.name.toLowerCase().includes(category.toLowerCase()) || item.category.toLowerCase().includes(category.toLowerCase())) {
            return item;
        }
    })
    return prod;
}

const addToCart = async(userId, productId, count=1) => {
    const orders = await ordersSchema.find({userId: userId, productId, isOrdered: false});
    if(!orders.length) {
        const newOrders = new ordersSchema({
            userId,
            productId,
            count: 1
        })
        const ordered = await newOrders.save();
        return ordered;
    }
    return await ordersSchema.findOneAndUpdate({userId, isOrdered: false, productId }, {count});

}

const checkout = async(userId) => {
    return await ordersSchema.findOneAndUpdate({userId, isOrdered: false }, {isOrdered: true});
}

const getCartItem = async(userId) => {
    const cartArr = [];
    const cart = await ordersSchema.find({userId, isOrdered: false });
    const products = await productSchema.find();
    cart.map(item => {
        products.map(_item => {
            if (item.productId === _item._id.toString()) {
                console.log({...item})
                cartArr.push({..._item._doc, ...item._doc});
            }
        })
    })
    return cartArr;
}


module.exports = {
    getProducts,
    addToCart,
    checkout,
    getCartItem
}