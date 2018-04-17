const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var message = 'matt likes beer';

// var hash = SHA256(message).toString();

// console.log(hash);

// var data = {
//     id:4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString() 
// }

// //man in the middle trying to change the data, then the hash will be different as they don't have the secret
// //token.data.id = 5;

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// //compare
// if (resultHash === token.hash){
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed')
// }

var data = {
    id:10
};

var token = jwt.sign(data, 'somesecret');

//console.log(token);

var decoded = jwt.verify(token, 'somesecreat');
console.log(decoded);