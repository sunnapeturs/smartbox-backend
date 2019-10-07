const express = require('express');
const cors = require('cors');
const authInfo = require('./secret.js');
const axios = require('axios');
const port = 10100;
const app = express();
app.use(cors());

app.get('/users', (req, res)=>{
    axios('https://ssb-dev-fep-01.azurewebsites.net/api/Sender', {
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Basic '+Buffer.from(authInfo).toString('base64')
        }
    }).then(r=>{
        res.send(r.data)
    })
})
app.listen(port, ()=>{
    console.log("listening to port", port);
})
