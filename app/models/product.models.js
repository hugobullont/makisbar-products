const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    stock: Number,
    type: String
});

module.exports = mongoose.model('Product', ProductSchema);