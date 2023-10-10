
const ProductModel = require('../model/ProductSchema')

const getProducts = async (req, res) => {
    try {
        const Products = await ProductModel.find({})
        if (Products)
            res.send(Products)
        else
            res.status(400).send(JSON.stringify({ message: 'error Occured' }))
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = { getProducts }