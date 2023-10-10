
const AmountModel = require('../model/AmountToPayModel.js')
const { CartModel } = require('../model/CartModels.js')
const UserModel = require('../model/UserModel.js')

const userSignup = async (req, res) => {
    try {

        const existUser = await UserModel.findOne({ email: req.body.email })
        if (existUser) {
            res.status(400).send(JSON.stringify({ message: 'user already exist' }))
        }
        else {

            const user = req.body
            const newUser = new UserModel(user)
            let result = await newUser.save()
            result = result.toObject()
            delete result.password
            delete result.confirm_password
            const newuserAmount = new AmountModel({ email: req.body.email, amount: 0, cart: 0 })
            let updateAmount = await newuserAmount.save()
            result['amount'] = response.amount
            result['cart'] = response.cart
            res.send(result)
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}
const userLogin = async (req, res) => {
    try {

        let result = await UserModel.find({ $or: [{ email: req.body.email }, { phone: req.body.email }], password: req.body.password })

        if (result.length > 0) {

            result = result[0].toObject()
            delete result.password
            delete result.confirm_password
            delete result.__v
            const response = await AmountModel.findOne({ email: result.email })
            const products = await CartModel.find({ userId: result._id })
            result['amount'] = response.amount
            result['cart'] = response.cart
            result['cartProducts'] = products
            res.status(200).send(result)
        }
        else {
            res.status(400).send(result)

        }
    }
    catch (err) {
        console.log(err)
        res.status(400).send(err)
    }
}

module.exports = { userSignup, userLogin }