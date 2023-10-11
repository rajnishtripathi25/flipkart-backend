const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,
    userId: {
        type: String,
        required: true,
    },

})

const CartModel = new mongoose.model("Cart", cartSchema)

module.exports = { CartModel }