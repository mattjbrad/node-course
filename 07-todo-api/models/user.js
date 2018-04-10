var mongoose = require('mongoose');

module.exports.userSchema = new mongoose.Schema({
    email:{
        type:String,
        required : true,
        trim : true,
        minlength : 1
    }
});