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
        console.log(arguments);
    },
    sayHello(){
        console.log(`Hello, ${this.name}`);
        console.log(arguments);
    },
    sayHola: function sayHola(){
        console.log(`Hola, ${this.name}`);
        console.log(arguments);
    }
};
//Prints Undefined username as it doesn't bind the this keyword, also arguments are not bound to this options. Can use if don'e need this or arguments
user.sayHi(1,2,3);

//This one works as it works like a regular function, without needing explicit function. Only on methods on objects
user.sayHello(1,2,3);

//this one is the old stle of defining it
user.sayHola(1,2,3);
