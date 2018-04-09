const request = require('supertest');
var app = require('./app').app;
const expect = require('expect');

it('should return this is the root', (done)=>{
    request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
            expect(res.body).toInclude({
               error:"Page not found" 
            });
        })
        .end(done);
});

it('should return the users', (done)=>{
    request(app)
        .get('/users')
        .expect(200)
        .expect((res)=>{
            expect(res.body).toInclude({name:'matt', age:27});
        })
        .end(done);
});