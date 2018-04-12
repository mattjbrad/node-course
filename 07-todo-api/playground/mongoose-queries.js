const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../models/todo');
const {ObjectId} = require('mongodb');

var id = '5acf2a1386026b56390289c9';
var brokenId = '6acf2a1386026b56390289c9'; //incremented number by one
var invalidId = '5acf2a1386026b56390289c9ADDEDSTUFF'

//Mongoose doesn't need to create the object id, you can just pass the string ID
Todo.find({
    _id:id
}).then((todos)=>{
    console.log(todos);
})

//Returns null if nothing, rather than an empty array to save some logic
Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log(todo);
})

//Less query syntax so prefferred if just one
Todo.findById(id).then((todo)=>{
    console.log(todo);
}).catch((e)=>{
    console.log(e);
})

//Less query syntax so prefferred if just one
Todo.findById(brokenId).then((todo)=>{
    //Handle nicely if the id doesn't exist, rather than having to get empy arrays
    if(!todo){
        return console.log('nothing found');
    }
    console.log(todo);
})

//Less query syntax so prefferred if just one
Todo.findById(invalidId).then((todo)=>{
    //Handle nicely if the id doesn't exist, rather than having to get empy arrays
    if(!todo){
        return console.log('nothing found');
    }
    console.log(todo);
}).catch((e)=>{
    //catch an error if the id is not valid
    console.log(e);
})

//use object id import is valid to check id's are valid before doing anything else
if(!ObjectId.isValid(invalidId)){
    console.log('id not valid');
};