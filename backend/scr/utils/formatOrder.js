const formatOrder = (order) => {
    return `
    New Order! 🍔
    Customer: ${order.name}
    Address: ${order.address}
    Order: ${order.items.map(item => `\n- ${item.name} x${item.qty}`).join('')}
    Total: $${order.total.toFixed(2)}
    `;
};

module.exports = formatOrder;
