require('dotenv').config()
const AmountModel = require('../model/AmountToPayModel.js')
const { CartModel } = require('../model/CartModels.js')
const UserModel = require('../model/UserModel.js')
const bcrypt = require('bcryptjs')


const userSignup = async (req, res) => {
    try {
        const { password, confirm_password, ...userDetails } = req.body
        const existUser = await UserModel.findOne({ email: req.body.email })
        if (existUser) {
            res.status(400).send({ message: 'user already exist' })
        }
        else {

            const passwordHash = await bcrypt.hash(password, 10)
            const user = { password: passwordHash, ...userDetails }
            const newUser = new UserModel(user)
            let result = await newUser.save()
            result = result.toObject()
            delete result.password
            const newuserAmount = new AmountModel({ email: req.body.email, amount: 0, cart: 0 })
            let updateAmount = await newuserAmount.save()
            result['amount'] = 0
            result['cart'] = 0
            res.send(result)
        }
    }
    catch (err) {
        res.status(400).send({message : err.message})
    }
}
const userLogin = async (req, res) => {
    try {

        let result = await UserModel.find({ $or: [{ email: req.body.email }, { phone: req.body.email }] })

        if (result.length > 0) {

            const isPasswordMatch = await bcrypt.compare(req.body.password, result[0].password)
            if (isPasswordMatch) {

                result = result[0].toObject()
                delete result.password
                delete result.__v

                const response = await AmountModel.findOne({ email: result.email })
                const products = await CartModel.find({ userId: result._id })
                result['amount'] = response.amount
                result['cart'] = response.cart
                result['cartProducts'] = products

                res.send(result)
            }
            else {
                res.status(400).send(JSON.stringify({ message: 'password does not matched' }))
            }
        }
        else {
            res.status(400).send({ message: 'user not found' })

        }
    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }
}

module.exports = { userSignup, userLogin }