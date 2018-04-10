var db = require('./db');

module.exports.handleSignup = (email, password)=>{
    //Check if user
    //Save to user
    db.saveUser({email,password});
    //Send welcome email
}