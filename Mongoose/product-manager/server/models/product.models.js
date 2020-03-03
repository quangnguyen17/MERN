const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: { type: String, require: true },
    price: { type: String, require: true },
    desc: { type: String, require: true }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;