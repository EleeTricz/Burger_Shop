const { z } = require('zod');

const orderSchema = z.object({
    name: z.string().min(1, {message: 'Order name is incomplete!'}),
    address: z.string().min(1, {message: 'Order adress is incomplete!'}),
    items: z.array(
        z.object({
            name: z.string().min(1, {message: 'Item name is incomplete!'}),
            qty: z.number().min(1, {message: 'Item quantity should be at least 1!'})
        })
    ).nonempty({message: 'Order items are incomplete or empty!'}),
    total: z.number().positive({message: 'Total should be a positive number!'})
});

module.exports = orderSchema;