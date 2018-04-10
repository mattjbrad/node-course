var mongoose = require('mongoose');

module.exports.todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required : true,
        minlegth1 : 1,
        trim : true
    },
    completed:{
        type:Boolean,
        default : false,
        required : true
    },
    completedAt: {
        type:Number
    }
});