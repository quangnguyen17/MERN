const ProductController = require('../controllers/product.controllers');

module.exports = app => {
    // GET
    app.get('/api/products', ProductController.getProducts);
    app.get('/api/products/:id', ProductController.getSingleProduct);
    // NEW
    app.post('/api/products', ProductController.createProduct);
    // PUT
    app.put('/api/products/:id', ProductController.updateProduct);
    // DELETE
    app.delete('/api/products/:id', ProductController.deleteProduct);
    app.delete('/api/products', ProductController.deleteAll);
}