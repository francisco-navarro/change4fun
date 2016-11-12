var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
   email: { type: String, lowercase: true, unique: true },
   password:  String
});

mongoose.model('User', UserSchema);