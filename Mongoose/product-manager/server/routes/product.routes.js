const ProductController = require('../controllers/product.controllers');

module.exports = app => {
    // GET
    app.get('/api/products', ProductController.getProducts);
    // NEW
    app.post('/api/products', ProductController.createProduct);
    // DELETE
    app.delete('/api/products', ProductController.deleteAll);
}