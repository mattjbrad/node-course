var {User} = require('./../../models/user');

var authenticate = (req, res, next) =>{
    var token = req.header('x-auth');

    User.findByToken(token).then((user) =>{
        if (!user) {
            return Promise.reject();
        }
        //Modify request to include user and token which we can use later on
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send('need authentication');
    });
};

module.exports.authenticate = authenticate;