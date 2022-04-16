const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
    userId: {
        type: String
    },
    productId: {
        type: String
    },
    count: {
        type: Number
    },
    isOrdered: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('orders', ordersSchema);