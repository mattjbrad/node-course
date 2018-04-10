const MongoClient = require('mongodb').MongoClient;

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
    });

    client.close();
} );