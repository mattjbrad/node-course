const expect = require('expect');
const request = require('supertest');

const {app} = require('./../app');
const {Todo} = require('./../../models/todo');

var testData = [{
    text:'first'
}, {
    text:'second'
}, {
    text:'third'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
        return Todo.insertMany(testData);
    }).then(()=> done());
});

describe("Post /todos", ()=>{

    it('should create a new todo', (done)=>{
        var text = 'tets todo text';
        request(app)
        .post('/todos')
        .send({text:text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err, res)=>{
            if (err){
                return done(err);
            }
            Todo.find({text:'tets todo text'}).then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done()
            }).catch((e)=> done(e));
        })
    });

    it('should not create todo with invalid body data', (done)=>{
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res)=>{
            if (err){
                return done(err);
            }
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(3);
                done();
            }).catch((e)=>done(e));
        })
    });
});

describe('Get todos', ()=>{
    it('Should request all todos', (done)=>{
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(3);
        })
        .end(done);
    });
});