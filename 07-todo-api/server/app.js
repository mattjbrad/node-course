var express = require('express');
var bodyPaser = require('body-parser');

var {mongoose} = require('../db/mongoose');
var {Todo} = require('../models/todo');
var {User} = require('../models/user');

var app = express();
app.use(bodyPaser.json());

app.get('/todos', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.post('/todos', (req, res)=>{
    var newTodo = new Todo(req.body);
    newTodo.save().then((todo)=>{
        res.send(todo);
        console.log(`Document inserted into db`);
    }, (error)=>{
        res.status(400).send(error);
        console.log('ERROR');
    });
});

app.listen(3000, ()=>{
    console.log('server started');
});

module.exports = {app};