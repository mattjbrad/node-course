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

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5acc7a461ab53811731ea33d')
    }, {$set:{completed:true}}
    , {returnOriginal:false}).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });

    //client.close();
} );