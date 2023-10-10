const AmountModel = require("../model/AmountToPayModel")
const { CartModel } = require("../model/CartModels")



const AddToCart = async (req, res) => {
    try {

        const { amount, cart, email, ...product } = req.body
        const isProductExist = await CartModel.find({ $and: [{ userId: product.userId }, { id: product.id }] })
        if (isProductExist.length === 0) {

            const item = new CartModel({ userId: email, ...product })
            let result = await item.save()
            await AmountModel.updateOne({ email: email }, {
                $set: {
                    amount: (amount + product.price.cost),
                    cart: (cart + 1)
                }
            })

            res.send({ isExist: false, ...result })
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
        await AmountModel.updateOne({ email: req.body.email }, {
            $set: {
                amount: req.body.amount - (req.body.price.cost * req.body.quantity),
                cart: req.body.cart - req.body.quantity
            }
        })
        res.send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}

const UpdateQuantity = async (req, res) => {
    try {

        const result = await CartModel.updateOne({ $and: [{ userId: req.body.userId }, { id: req.body.id }] },
            {
                $set: {
                    quantity: req.body.quantity
                }
            })
        await AmountModel.updateOne({ email: req.body.email }, {
            $set: {
                cart: req.body.cart,
                amount: req.body.amount
            }
        })
        res.send(result)
    } catch (err) {
        res.status(400).send(err)
    }
}



module.exports = { AddToCart, DeleteFromCart , UpdateQuantity}