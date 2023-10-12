const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    products: Object,
    payment: Object,
    buyer: Object,
    status: {
        type: String,
        default: 'Not Processed',
        enum: ["Not Processed", 'Processing', 'Shipped', 'Delivered']
    },
    date: {
        type: Date,
        get: function () {
            return this._doc.date.toLocaleString('en-IN');
        }
    },
    deliveryAddress :String
})

module.exports = mongoose.model('Order', orderSchema)