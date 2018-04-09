const express = require('express');

var app = express();

app.get('/', (req, res)=>{
    res.status(404).send(
        {error:"Page not found",
            name:"nanobrew"});
});

app.get('/users', (req, res)=>{
    var users = [];
    users.push({name:'matt', age:27});
    users.push({name:'bob', age:28});
    res.send(users);
});

app.listen(3000);

module.exports.app = app;