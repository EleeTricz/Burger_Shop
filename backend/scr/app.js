const express = require('express');
const burgerOrderRoutes = require('./routers/burgerOrderRoutes');
const productRoutes = require('./routers/productRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/order',burgerOrderRoutes);
app.use('/',productRoutes);

module.exports = app;