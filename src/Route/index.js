const express = require('express');
const authRouter = require('./auth.route');
const foodRouter = require('./product.route');

const app = express();

app.use('/auth', authRouter);
app.use('/product', foodRouter);

module.exports = app;