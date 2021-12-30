const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Clients = require('./clients.js');

dotenv.config();
const app = express();

app.listen(process.env.PORT || 5000)

mongoose.connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {

    console.log('Conectado com MongoDB Atlas!');

}).catch(function (err) {

    console.log(err.message);
})

app.get('/clients', (req, res) => {

    Clients.find({}).exec( (err, clients) => {

        res.json(clients);
    })
});