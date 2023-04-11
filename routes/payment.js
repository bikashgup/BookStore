var router = require('express').Router();
const paypal = require("paypal-rest-sdk");
const config = require('../config');
var Book = require('./../storage/models/book');

paypal.configure(config.paypal.config);

router.get("/:id", (req, res) => {
  const book = Book.findOne({ "_id": req.params.id });
  console.log(book, "hello");
  const create_payment_json = {
    intent: "SALE",
    payer: {
      payment_method: "paypal"
    },
    redirect_urls: {
      return_url: config.paypal.return_url+"success",
      cancel_url: config.paypal.return_url+"cancel",
    },
    transactions: [
      {
        books_list: {
          books: [
            {
              name: "Mobile Data Mangement",
              Author: "Shivali Dhaka",
              price: "50.00",
              currency: "CAD",
              quantity: 10,
            },
          ],
        },
        amount: {
          currency: "CAD",
          total: "500.00",
        },
        description: "Mobile Data Managemnt course Book",
      },
    ],
  };
  // console.log(create_payment_json)
  paypal.payment.create(create_payment_json, function (error, payment) {
    // console.log(payment)
    if (error) {
      throw error;
    } else {
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === "approval_url") {
          res.redirect(payment.links[i].href);
        }
      }
    }
  });
});

router.get("/success", (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    payer_id: payerId,
    transactions: [
      {
        amount: {
          currency: "CAD",
          total: "500.00",
        },
      },
    ],
  };
  paypal.payment.execute(paymentId, execute_payment_json, function (
    error,
    payment
  ) 
  {
    console.log(payment, "payment")

    if (error) {
      console.log(error.response);
      throw error;
    } else {
      console.log(JSON.stringify(payment));
      res.send("Success");
    }
  });
});

router.get("/cancel", (req, res) => res.send("Cancelled"));



module.exports = router;