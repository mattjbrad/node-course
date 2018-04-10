var mongoose = require('mongoose');

var todo = require('../models/todo');
var user = require('../models/user');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', todo.todoSchema);
var User = mongoose.model('User', user.userSchema);

// var newTodo = new Todo({text:'This is the text 2'});
// newTodo.save().then((todo)=>{
//     console.log(todo);
// }, (e)=>{
//     console.log(e);
// });

var newUser = new User({email:'matt@matt.com'});
newUser.save().then((user)=>{
    console.log(user);
}, (e)=>{
    console.log(e);
});