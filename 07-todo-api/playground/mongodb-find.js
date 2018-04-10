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

    //Querying for attribute
    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err)=>{
    //     console.log('error', err);
    // });

    //Querying for id, need to create an object id
    // db.collection('Todos').find({
    //     _id:new ObjectID('5acc9410edfa30cd4844cea3')
    // }).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err)=>{
    //     console.log('error', err);
    // });

    // //Counting with count and promises
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Count: ${count}`);
    // }).catch((err)=>{
    //     console.log('error', err);
    // });

    //Querying for id, need to create an object id
    db.collection('Users').find({
        name:"Matt"
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err)=>{
        console.log('error', err);
    });

    client.close();
} );