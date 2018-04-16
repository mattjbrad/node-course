var express = require('express');
var bodyPaser = require('body-parser');

var {mongoose} = require('../db/mongoose');
var {Todo} = require('../models/todo');
var {User} = require('../models/user');

var app = express();
app.use(bodyPaser.json());

const port = process.env.PORT || 3000;

app.get('/todos', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todos});
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req,res)=>{

    var id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('Not valid');
    }
    Todo.findById(id).then((todo)=>{
        if (todo){
            res.send({todo});
        } else {
            res.status(404).send('Not found');
        }
    },(e)=>{
        res.status(400).send(e);
    })
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

app.listen(PORT, ()=>{
    console.log('server started');
});

module.exports = {app};