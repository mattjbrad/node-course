const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../models/todo');
const {ObjectId} = require('mongodb');

//remove many
Todo.remove({}).then((result)=>{
    console.log(results);
})

//remove specific
Todo.findByIdAndRemove(id).then((todo)=>{
    console.log(todo);
})