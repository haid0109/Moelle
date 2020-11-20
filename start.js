const express = require('express');
const mongoose = require('mongoose');

const Models = require('./schemas');
const Endpoints = require('./endpoints');

const app = express();

const Application = module.exports = function(){
    this.mongoose = mongoose.createConnection('mongodb+srv://username:Passw0rd@moelle.rk7oc.mongodb.net/moelle?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
}

Application.prototype.initialize = async function initialize(){
    await this.mongoose;
    const models = new Models(this.mongoose);
    this.Data = models.Data;
}

Application.prototype.start = async function start(){
    Endpoints.start(app, this.Data);
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
app.use(express.json());
app.listen(2020, async () => {
    const application = new Application();
    await application.initialize();
    await application.start();
});
