//Syntax is the same
//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID} = require("mongodb");

//Can generate our own id's if we want
var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Cant connect to db');
    }
    console.log('connect to db');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:'something',
    //     completed:true
    // }, (err, result)=>{
    //     if (err) {
    //         return console.log('Cant insert', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name:'Matt',
        age:27,
        location:"Manchester"
    }, (err, result)=>{
        if (err) {
            return console.log('Cant insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        //Timestamp when the document was created
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));

    });

    client.close();
} );