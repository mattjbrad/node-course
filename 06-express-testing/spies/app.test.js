const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App Spies', ()=>{

    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db);

    it('should call spies correcntly', ()=>{
        var spy = expect.createSpy();
        spy('Matt', 27);
        expect(spy).toHaveBeenCalledWith('Matt', 27);
    });

    it('should call saveuser with user object', ()=>{
        var email = 'matt@matt.com';
        var pass = "12p2ejroksjdf";
        app.handleSignup(email, pass);
        expect(db.saveUser).toHaveBeenCalledWith({email, pass});
    })
});