require('dotenv').config();
const express = require('express');
const paypal = require('@paypal/checkout-server-sdk');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const environment = new paypal.core.SandboxEnvironment(process.env.PAYPAL_CLIENT_ID, process.env.PAYPAL_CLIENT_SECRET);
const client = new paypal.core.PayPalHttpClient(environment);

// Create Order
app.post('/create-order', async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: req.body.amount, // Amount from client
        },
      },
    ],
  });

  try {
    const order = await client.execute(request);
    res.status(200).json({ id: order.result.id });
  } catch (err) {
    res.status(500).send(err);
  }
});

// const ganerateAcceesToken = async () =>{
//         const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
//         const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;
//         console.log({PAYPAL_CLIENT_ID,PAYPAL_CLIENT_SECRET});

//         if(!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET){
//                 throw "PayPal Credentails not found"
//         }
// }


// Capture Order
app.post('/capture-order', async (req, res) => {
  const { orderID } = req.body;
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await client.execute(request);
    res.status(200).json(capture.result);
  } catch (err) {
    res.status(500).send(err);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
