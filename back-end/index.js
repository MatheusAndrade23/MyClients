const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const body = require('body-parser');
const cors = require("cors");

const Clients = require('./clients.js');

const router = express.Router();
dotenv.config();
const app = express();

app.listen(process.env.PORT || 5000)

app.use(body.json());
app.use(body.urlencoded({extended: false}))

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

mongoose.connect(process.env.DB_CONFIG, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {

    console.log('Conectado com MongoDB Atlas!');

}).catch(function (err) {

    console.log(err.message);
})

app.get('/clients', (req, res) => {

    Clients.find({}).exec((err, clients) => {

        res.json(clients);
    })
});

router.post('/receive', async (req,res) => {

    
});

