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
let user = {
    sayName: 'Joe',
    sayHi() {
        alert('Hello, my name is ${this.sayName}!');
    }
};
console.log(user.sayName);

// code example for Window Binding

// Principle 2


// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4
const car = {
    make: 'Ford',
    model: 'Focus',
    details: function(){
    return `here is your new ${this.make}, ${this.model}!`;
}
}
console.log(car.details());
// code example for Explicit Binding