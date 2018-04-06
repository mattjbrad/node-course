var square = (num) => {
    return num*num;
};

//OR, if one line you can skip curly braces and return statement, and one argument you don't need the brackets

var square = (num) => num * num;
var square = num => num * num;

console.log(square(9));

var user = {
    name: 'Matt',
    sayHi: () =>{
        console.log(`Hi, ${this.name}`);
    },
    sayHello(){
        console.log(`Hello, ${this.name}`);
    },
    sayHola: function sayHola(){
        console.log(`Hola, ${this.name}`);
    }
};
//Prints Undefined username
user.sayHi();

//This one works as it works like a regular function, without needing explicit function. Only on methods on objects
user.sayHello();

//this one is the old stle of defining it
user.sayHola();
