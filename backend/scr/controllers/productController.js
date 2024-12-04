const getProducts = (_req,res) =>{
    const products = [
        { id: 1, name: 'Cheeseburger', price: 10.99 },
        { id: 2, name: 'Bacon Burger', price: 12.99 },
        { id: 3, name: 'Vegetarian Burger', price: 9.99 },
        { id: 4, name: 'Texas Heatwave', price: 15.99 },
        { id: 5, name: 'Iced Coffee Bliss', price: 3.99 },
        { id: 6, name: 'Classic Lemonade', price: 2.99 },
        { id: 7, name: 'Strawberry Cream Soda', price: 5.99 },
    ];

    return res.json(products);
} 

module.exports = {
    getProducts,
}