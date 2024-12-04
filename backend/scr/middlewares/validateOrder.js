const orderSchema = require('../schemas/orderSchema');

const validateOrder = (req, res, next) => {
    const { name, address, items, total} = req.body;

    try{
        orderSchema.parse(req.body);
        next();
    } catch(err){
        if (err.errors && err.errors[0]) {
            return res.status(400).json({ error: err.errors[0].message });
        } else {
            return res.status(400).json({ error: 'An unknown error occurred during validation' });
        }
    }
}

module.exports = validateOrder;