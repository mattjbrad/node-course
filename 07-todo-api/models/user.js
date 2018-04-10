var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email:{
        type:String,
        required : true,
        trim : true,
        minlength : 1
    }
});

module.exports.User = mongoose.model('User', userSchema);