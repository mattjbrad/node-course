module.exports.add = (a,b) =>{
    return a+b;
};

module.exports.square = (x) => x*x;

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.first = names[0];
    user.last = names[1];
    return user;
};

//ASYNC Functions for testing

module.exports.asyncAdd = (a,b, callback)=>{
    setTimeout(()=>{
        callback(a+b)
    }, 1000);
};

module.exports.asyncSquare = (a, callback)=>{
    setTimeout(()=>{
        callback(a*a);
    }, 1000);
};