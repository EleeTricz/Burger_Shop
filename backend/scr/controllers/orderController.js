const formatOrder = require('../utils/formatOrder');

require('dotenv').config();

const sendOrder = (req,res) => {
    const order = req.body;
    const message = formatOrder(order);
    
    const phone = process.env.PHONE_NUMBER; 

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

    res.json({whatsappLink});
}

module.exports = {
    sendOrder

}