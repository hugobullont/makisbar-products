module.exports = (app) => {
    const products = require('../controllers/product.controllers.js');

    app.get('/makisBar-products/api/v1/products', products.findAll);
    app.get('/makisBar-products/api/v1/:name', products.getByName);
    app.post('/makisBar-products/api/v1/product',products.addOne);
    app.delete('/makisBar-products/api/v1/product/:id', products.deleteProduct);
};