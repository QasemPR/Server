const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    about: {
        type: String,
        default: ''
    }
}, {
    timeseries: true
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;