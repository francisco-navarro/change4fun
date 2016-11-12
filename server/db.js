var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

require(__dirname + '/models/users');
var db = {
   User: mongoose.model('User')
};

var connectionString = require(__dirname + '/mongo_config.js');

console.log('Connection to ' + connectionString);
mongoose.connect(connectionString);


module.exports = db;