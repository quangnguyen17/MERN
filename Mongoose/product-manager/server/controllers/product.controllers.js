const Product = require('../models/product.models');

module.exports.getProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(error => res.json(error))
}

module.exports.getSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(error => res.json(error))
}

module.exports.createProduct = (req, res) => {
    const { title, price, desc } = req.body;
    Product.create({ title: title, price: price, desc: desc })
        .then(createdProduct => res.json(createdProduct))
        .catch(error => res.json(error))
}

module.exports.updateProduct = (req, res) => {
    const { title, price, desc } = req.body;
    Product.updateOne({ _id: req.params.id }, { title: title, price: price, desc: desc }, { new: true })
        .then(updatedProduct => res.json(updatedProduct))
        .catch(error => res.json(error))
}

// ADMIN
// DELETE ALL
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(results => res.json(results))
        .catch(error => res.json(error));
}

module.exports.deleteAll = (req, res) => {
    Product.deleteMany()
        .then(results => res.json(results))
        .catch(error => res.json(error));
}