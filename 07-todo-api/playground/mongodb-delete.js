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

    //Delete Many
    // db.collection('Todos').deleteMany({text:"Something"}).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    //Delete One
    // db.collection('Todos').deleteOne({text:"Something"}).then((result)=>{
    //     console.log(result.deletedCount);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    //Delete One
    db.collection('Todos').findOneAndDelete({text:"Something"}).then((doc)=>{
        console.log(doc);
    }).catch((error)=>{
        console.log(error);
    });
    //client.close();
} );