const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    ratings: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});


const ProductModel = new mongoose.model('Product', ProductSchema)

module.exports = ProductModel