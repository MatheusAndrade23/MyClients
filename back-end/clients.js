const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema({

    name: String,
    total: Number,

},{collection:'clients'});

var Clients = mongoose.model("Clients",clientSchema);

module.exports = Clients;