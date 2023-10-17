require('dotenv').config()
const OrderModel = require("../model/OrderModel")
var braintree = require("braintree");
const SendMail = require('./Email-controller');

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

    const { nonce, amount, cartProducts, address ,email ,name} = req.body
    // let newTransaction = gateway.transaction.sale(
    //   {
    //     amount: amount,
    //     paymentMethodNonce: nonce,
    //     options: {
    //       submitForSettlement: true,
    //     },
    //   },
    //   function (err, result) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }

    // if (result.success)
    if (true) {
      const order = new OrderModel({
        products: cartProducts,
        payment: amount,
        buyer: email,
        date: date,
        deliveryAddress: address
      })
      order.save()
        .then((savedOrder) => {
          res.send(savedOrder)
        })
      try {

        const response = SendMail(req.body)
      } catch (err) {
        res.status(400).send(err)
      }

    } else {
      console.error(result.message);
    }
  }
  // );

  catch (err) {
    console.log(err)
  }

}


module.exports = { paymentController, braintreeTokenController }