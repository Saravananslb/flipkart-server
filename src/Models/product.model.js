const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    brand: {
        type: String
    },
    category: {
        type: String,
    },
    highlights: {
        type: Array
    },
    offers: {
        type: Number
    },
    rating: {
        type: String
    },
    seller: {
        type: String
    },
    deliveryIn: {
        type: Number
    }
});

module.exports = mongoose.model('products', productSchema);