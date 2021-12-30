const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema({

    name: String,
    total: Number,
    contas: Array,
    datas: Array

},{collection:'clients'});

var Clients = mongoose.model("Clients",clientSchema);

module.exports = Clients;