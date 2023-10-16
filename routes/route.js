require('dotenv').config()
const express = require('express')
const { userSignup, userLogin } = require('../controller/user-controller.js')
const { getProducts } = require('../controller/product-controller.js')
const { AddToCart, DeleteFromCart, IncreaseQuantity, DecreaseQuantity, checkout } = require('../controller/Cart-controller.js')
const { braintreeTokenController, paymentController } = require('../controller/payment-controller.js')
const jwt = require('jsonwebtoken')
const SendMail = require('../controller/Email-controller.js')

const router = express.Router()


router.post('/signup', userSignup)

router.post('/login', userLogin)

router.get('/products', getProducts)



router.post('/addtocart', AddToCart)

router.post('/delete-from-cart', DeleteFromCart)

router.put('/decrease-quantity', DecreaseQuantity)

router.put('/increase-quantity', IncreaseQuantity)

// token
router.get('/braintree/token', braintreeTokenController)

// payment controller
router.post('/product/braintree/payment', paymentController)

router.post('/checkout', checkout)

router.post('/send-mail', SendMail);



module.exports = router