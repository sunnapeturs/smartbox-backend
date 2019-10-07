const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authInfo = require('./secret.js');
const fetch = require('isomorphic-fetch');
const port = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/post-order', (req, res) => {
    console.log(req.body)
    fetch("https://ssb-dev-fep-01.azurewebsites.net/api/Delivery", {
        body: JSON.stringify({
            "senderOrderID": "2357433",
            "description": "lysing",
            "senderId": 19,
            "numberOfPackages": req.body.numberOfPackages,
            "pickupAtDeliveryBranch": true,
            "box": false,
            "location": "hilla",
            "recipient": {
                "email": req.body.email,
                "phone": req.body.phone,
                "name": req.body.name
        }
    }),
    headers: {
        Accept: "application/json",
        Authorization: "Basic dmVmc2tvbGk6Q1l3YzZsNEkyZg==",
        "Content-Type": "application/json"
    },
    method: "POST"
    })
    .then(res =>
        res.json()
    )
    .then( bkey =>
        res.send(bkey)
    )
})
app.listen(port, () => {
    console.log("listening to port", port)
}); 