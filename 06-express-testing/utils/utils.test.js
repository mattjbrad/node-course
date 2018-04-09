const utils = require('./utils');
const expect = require('expect');

describe('Utils', ()=>{

    describe('#Numbers', ()=>{
        it('should add two numbers', ()=>{
            var result = utils.add(33,11);
            expect(result).toBe(44).toBeA('number');
            //Expect replaces this kind of syntax
            // if(result!==44){
            //     throw new Error(`Expected 44, we got ${result}`);
            // }
        
        });
        
        it('should square a number', ()=>{
            var result = utils.square(9);
            expect(result).toBe(81).toBeA('number');
            // if(result!==81){
            //     throw new Error(`Expected 81, we got ${result}`);
            // }
        
        });
    });

    describe('#Examples', ()=>{
        it('should expect some values', ()=>{
            expect(12).toNotBe(11);
        });
        
        it('should expect some values', ()=>{
            expect({name:"matt"}).toEqual({name:"matt"});
        });
        
        it('should expect inclusion of values', ()=>{
            expect([2,3,4]).toInclude(2);
        });
        
        it('should expect exclusion of values', ()=>{
            expect([2,3,4]).toExclude(1);
        });
        
        it('should expect inclusion of values object', ()=>{
            expect({
                name:'matt',
                 age:27})
            .toInclude({name:'matt'});
        });
        
        it('should expect names to be split', ()=>{
        
            var user = utils.setName({location:'Manchester', age:27}, 'Matthew Bradshaw');
            expect(user).toInclude({first:"Matthew",last:"Bradshaw"}).toBeA("object");
        
        });
    });
    
    
    describe("#Async", ()=>{
        //Need to pass done as an argument to it callback so it knows it is a async call
        it('should add two numbers asynchronously', (done)=>{
            utils.asyncAdd(33,11, (result)=>{
                expect(result).toBe(44).toBeA('number');
                //Call done when it should of finished
                done();
            });
        });

        it('should square 2 numbers asynchronously', (done)=>{
            utils.asyncSquare(9, (result)=>{
                expect(result).toBe(81).toBeA('number');
                done();
            }); 
        });
    });
})

