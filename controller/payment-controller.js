require('dotenv').config()
const OrderModel = require("../model/OrderModel")
var braintree = require("braintree");

const date = new Date(Date.now()).toLocaleString()



var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRANETREE_MID,
  publicKey: process.env.BRANETREE_PUBLIC_KEY,
  privateKey: process.env.BRANETREE_PRIVATE_KEY,
});

//token
const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}).then((response, err) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(response.clientToken)
      }
    })
  } catch (err) {
    console.log(err)
  }

}

//payment 
const paymentController = async (req, res) => {

  try {

    const { nonce, amount, userId, cartProducts, address } = req.body
    let newTransaction = gateway.transaction.sale(
      {
        amount: amount,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true,
        },
      },
      function (err, result) {
        if (err) {
          console.error(err);
          return;
        }

        if (result.success) {
          const order = new OrderModel({
            products: cartProducts,
            payment: result,
            buyer: userId,
            date: date,
            deliveryAddress: address
          })
          order.save()
            .then((savedOrder) => {
              res.send(savedOrder)
            })

        } else {
          console.error(result.message);
        }
      }
    );

  } catch (err) {
    console.log(err)
  }

}


module.exports = { paymentController, braintreeTokenController }