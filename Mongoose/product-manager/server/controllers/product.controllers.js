const Product = require('../models/product.models');

module.exports.getProducts = (req, res) => {
    const { title, price, desc } = req.body;
    Product.find()
        .then(products => res.json(products))
        .catch(error => res.json(error))
}

module.exports.createProduct = (req, res) => {
    const { title, price, desc } = req.body;
    Product.create({ title: title, price: price, desc: desc })
        .then(createdProduct => res.json(createdProduct))
        .catch(error => res.json(error))
}

// ADMIN
// DELETE ALL
module.exports.deleteAll = (req, res) => {
    Product.deleteMany()
        .then(results => res.json(results))
        .catch(error => res.json(error));
}