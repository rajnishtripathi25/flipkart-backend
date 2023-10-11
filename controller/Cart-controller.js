const AmountModel = require("../model/AmountToPayModel")
const { CartModel } = require("../model/CartModels")



const AddToCart = async (req, res) => {
    try {

        const { email, ...product } = req.body
        const isProductExist = await CartModel.find({ $and: [{ userId: product.userId }, { id: product.id }] })
        if (isProductExist.length === 0) {

            const item = new CartModel(product)
            let result = await item.save()
            let details = await AmountModel.findOne({ email: email })
            await AmountModel.updateOne({ email: email }, {
                $set: {
                    amount: details.amount + product.price.cost,
                    cart: details.cart + 1
                }
            })
            details.cart += 1
            details.amount += product.price.cost
            const cartItems = await CartModel.find({ userId: product.userId })

            res.send({ ...result, cart: details, cartItems: cartItems })
        }
        else {
            res.send({ isExist: true })
        }
    } catch (err) {
        res.status(400).send(err)
    }
}


const DeleteFromCart = async (req, res) => {
    try {

        const result = await CartModel.deleteOne({ $and: [{ id: req.body.id }, { userId: req.body.userId }] })
        let details = await AmountModel.findOne({ email: req.body.email })
        const respose = await AmountModel.updateOne({ email: req.body.email }, {
            $set: {
                amount: details.amount - (req.body.price.cost * req.body.quantity),
                cart: details.cart - req.body.quantity
            }
        })
        details.cart -= req.body.quantity;
        details.amount -= (req.body.price.cost * req.body.quantity);
        const cartItems = await CartModel.find({ userId: req.body.userId })

        res.send({ cart: details, cartItems: cartItems })

    } catch (err) {
        res.status(400).send(err)
    }
}

const DecreaseQuantity = async (req, res) => {
    try {

        const { userId, cart, email, amount, ...product } = req.body
        const result = await CartModel.findOne({ $and: [{ userId: userId }, { id: product.id }] })
        await CartModel.updateOne({ $and: [{ userId: userId }, { id: product.id }] },
            {
                $set: {
                    quantity: result.quantity - 1
                }
            })
        await AmountModel.updateOne({ email: email }, {
            $set: {
                cart: cart - 1,
                amount: amount - product.price.cost
            }
        })
        res.send({ amount: amount - product.price.cost, cart: cart - 1 })
    } catch (err) {
        res.status(400).send(err)
    }
}

const IncreaseQuantity = async (req, res) => {
    try {
        const { userId, cart, email, amount, ...product } = req.body
        const result = await CartModel.findOne({ $and: [{ userId: userId }, { id: product.id }] })
        await CartModel.updateOne({ $and: [{ userId: userId }, { id: product.id }] },
            {
                $set: {
                    quantity: result.quantity + 1
                }
            })
        await AmountModel.updateOne({ email: email }, {
            $set: {
                cart: cart + 1,
                amount: amount + product.price.cost
            }
        })
        res.send({ amount: amount + product.price.cost, cart: cart + 1 })
    } catch (err) {
        res.status(400).send(err)
    }
}



module.exports = { AddToCart, DeleteFromCart, DecreaseQuantity, IncreaseQuantity }