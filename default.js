const products = require('./constants/data.js')
const ProductModel = require('./model/ProductSchema.js')

const DefaultData = async () => {
    try {
        await ProductModel.insertMany(products);
        console.log(" data inserted successfully")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = DefaultData