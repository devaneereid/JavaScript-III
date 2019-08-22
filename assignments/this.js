/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding- It's the basic value of "this" and it's found inside of a function. 
* 2. Implicit Binding- A function that is called by a dot behind it. 
* 3. New Binding - Also, constructor function. It's a function that returns an object when called.  
* 4. Explicit Binding- Also, call or apply - It's a method that points explicitly to what it's defining. 
*
* write out a code example of each explanation above
*/

// Principle 1
const user = {
    sayName: 'Joe',
    sayHi: function(){
        return 'Hello, my name is ${this.sayName}!';
    }
}

console.log(user.sayHi());

// code example for Window Binding

// Principle 2
let myDog = {
    name: 'Tessa',
    sound: 'Wooof!',
    dog: function(){
        console.log(this.sound);
    }
}
myDog.dog();

// code example for Implicit Binding

// Principle 3
function cat(saying){
    this.thing = saying;
}
let myCat = new cat('Tiger is a nice kitty!');

console.log(myCat.thing);

// code example for New Binding

// Principle 4
const car = {
    make: 'Ford',
    model: 'Focus',
    details: function(){
    return `Here is your new ${this.make}, ${this.model}!`;
}
}
console.log(car.details());
// code example for Explicit Binding