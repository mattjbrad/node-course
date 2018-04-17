var express = require('express');
var bodyPaser = require('body-parser');
var _ = require('lodash');

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

app.delete('/todos/:id', (req, res)=>{
    var id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('Not valid');
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(todo){
            res.send({todo});
        } else {
            res.status(404).send('Not found');
        }
    }, (e)=>{
        res.status(400).send(e);
    })
});

app.patch('/todos/:id', (req, res)=>{

    var id = req.params.id;
    //takes the text and completed attributes of the body if they exist
    var body = _.pick(req.body, ['text', 'completed']);

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('Not valid');
    }

    if(_.isBoolean(body.completed)&&body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set:body}, {new:true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
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

app.post('/users', (req, res) => {

    //dont want users to mess with the token attributes
    var body = _.pick(req.body, ['email', 'password']);
    var newUser = new User(body);
    console.log(newUser);
    newUser.save().then(() => {
        return newUser.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(newUser);
    }).catch((err) => {
        res.status(400).send(err);
        console.log('catch');
    });

});

app.listen(port, ()=>{
    console.log('server started');
});

module.exports = {app};