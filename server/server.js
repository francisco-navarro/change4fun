var express = require('express');
var bodyParser = require('body-parser');
var router = require('./routes/config.js');

var app = express();
var db = require('./db');
var serverPort = process.env.NODEJS_PORT || 3000;
var serverIpAddress = process.env.NODEJS_IP || '127.0.0.1';

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());
router(app, db);
app.listen(serverPort, serverIpAddress, function() {
   console.log('App started listening on port ' + serverPort);
});