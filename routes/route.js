const express = require('express')
const { userSignup, userLogin } = require('../controller/user-controller.js')
const { getProducts } = require('../controller/product-controller.js')
const { AddToCart, DeleteFromCart , UpdateQuantity } = require('../controller/Cart-controller.js')



const router = express.Router()

router.post('/signup', userSignup)

router.post('/login', userLogin)

router.get('/products', getProducts)



router.post('/addtocart', AddToCart)

router.post('/delete-from-cart', DeleteFromCart)

router.put('/update-quantity', UpdateQuantity)

// router.post('/create-checkout-session', addPaymentGateWay)

module.exports = router