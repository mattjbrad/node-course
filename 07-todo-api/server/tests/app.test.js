const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../app');
const {Todo} = require('./../../models/todo');

var testData = [{
    text:'first',
    _id: new ObjectID()
}, {
    text:'second',
    _id: new ObjectID()
}, {
    text:'third',
    _id : new ObjectID()
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

describe('Get todo/:id', ()=>{
    it('Should return one todo', (done)=>{
        request(app)
        .get(`/todos/${testData[0]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(testData[0].text);
        })
        .end(done);
    });

    it('should return a 404 if not found', (done)=>{
        request(app)
        .get(`/todos/${new ObjectID().toHexString()}`)
        .expect(404)
        .end(done);
    });

    it('should return a 404 if for none object ids', (done)=>{
        request(app)
        .get('/todos/thisissatest')
        .expect(404)
        .end(done);
    });
});

describe("Delete todos/:id", ()=>{

    it('should remove a todo', (done)=>{
        request(app)
        .delete(`/todos/${testData[1]._id.toHexString()}`)
        .expect(200)
        .expect((res)=>{
            expect(res.body.todo.text).toBe(testData[1].text);
        })
        .end((err, res)=>{
            if (err){
                return done(err);
            }
            Todo.findById(testData[1]._id.toHexString()).then(
                (todo)=>{
                    expect(todo).toBe(null);
                    done();
                }).catch((e) => done(e));
        });
    });

    it('should return 404 if todo not found', (done)=>{
        request(app)
        .delete(`/todos/${new ObjectID().toHexString()}`)
        .expect(404)
        .end(done);
    })

    it('should return 404 if object id is invaald', (done)=>{
        request(app)
        .delete('/todos/thisissatest')
        .expect(404)
        .end(done);
    })
});