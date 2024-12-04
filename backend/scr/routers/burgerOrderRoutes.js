const express = require('express');
const validateOrder = require('../middlewares/validateOrder');
const orderController = require('../controllers/orderController');


const router = express.Router();

router.post('/bugerorder',validateOrder, orderController.sendOrder);

module.exports = router;
