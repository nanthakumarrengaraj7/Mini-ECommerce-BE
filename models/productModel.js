const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    ratings: String,
    images: [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: Number,
    numOfReviews: Number,
    createdAt: Date
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;



