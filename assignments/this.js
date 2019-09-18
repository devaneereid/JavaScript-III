/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding - It's the basic value of "this" and it's found inside of a function. It uses a 'strict mode'.
* 2. Implicit Binding - A function that is called with a dot behind it.
* 3. New Binding - Also, a constructor function. It's a function that returns an object when called.
* 4. Explicit Binding - Also, call or apply. It's a method that points explicitly to what it's defining.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayHello(greeting) {
    console.log(greeting);
}
sayHello('Hello!');

// Principle 2
// code example for Implicit Binding
let newCowboy = {
    name: 'William',
    sound: 'Howdy!',
    cowboy: function(){
        console.log(this.sound);
    }
}
newCowboy.cowboy();

// Principle 3
// code example for New Binding

function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old!`);
    }
}
const jenna = new Person({name:'Jenna', age: 35});
jenna.speak();

// Principle 4
// code example for Explicit Binding

function cat(){
    console.log(this.meow);
}
let myCat = {
    name: 'Tiger',
    meow: 'Meowwww!😸'
}
cat.call(myCat);