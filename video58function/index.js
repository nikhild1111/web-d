function nice(name){
    console.log("hey "+name+" you are nice")
    console.log("hey"+name+"you are nice new")
    console.log("hey"+name+"you are nice well")
    console.log("hey"+name+"you are nice also")
}
nice("nikhil")

function sum(a,b,c=3){
    console.log(a+b)
    console.log(a,b,c)
    return a+b+c
}
// Arrow functions offer a more concise and readable way to write functions, especially useful for short functions and callbacks. Their lexical this binding makes them a better choice in many scenarios, particularly when dealing with nested functions and callbacks where managing the this context is crucial. However, they are not a replacement for all traditional functions, especially when you need function-specific features like arguments or when defining methods in objects or classes.






re1=sum(3,4)
let re2=sum(2,5)
re3=sum(7,8,4)

// Regarding your second question, yes, in JavaScript, you can declare variables without specifying a data type explicitly. JavaScript is a dynamically typed language, which means variables can hold values of any type, and the type of the variable can change over time based on the value assigned to it. When you declare a variable using var, let, or const, you simply declare its name without specifying its data type. The data type of the variable is determined dynamically based on the value assigned to it.
// However, the difference between the two lines lies in the declaration of the variables. In the first line, re1 is assigned without using the let, const, or var keyword, which implies that it might have been declared elsewhere in the code or is implicitly declared as a global variable. In the second line, let is used to declare re2, indicating that it is a block-scoped variable. Using let is generally considered a good practice for variable declarations, as it helps prevent accidental global variable declarations and provides block scope.


// In JavaScript, var, let, and const are keywords used for variable declaration, each with different characteristics:

console.log("The sum of these numbers is: ","ii",re2, re1)
// When you use the comma operator to separate items in a console.log statement, each item is printed with a space between them.
// The variables are evaluated individually and their values are printed sequentially, separated by a space.

console.log("The sum of these numbers is: "+ re2)
// When you use the plus operator to concatenate strings in a console.log statement, the items are concatenated into a single string.
// The variables are evaluated and their values are converted to strings, then concatenated together.
console.log("The sum of these numbers is: "+ re3)

// In summary, the difference lies in how the variables are combined with the string. The comma operator adds a space between each item, while the plus operator concatenates them directly without adding any additional space.

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

// If there's only one parameter, the parentheses around parameters can be omitted:
// parameter => { statements }

///********************************* */
// Traditional function expression
// let add = function(a, b) {
//     return a + b;
//   };
  
//   // Arrow function
// we use addarrow(orbveriable for pasing the value to the argumnent)
//   let addArrow = (a, b) => a + b;
  
//   console.log(add(5, 3)); // Output: 8
//   console.log(addArrow(5, 3)); // Output: 8

// In the previous example, addArrow is simply a variable name chosen to store a reference to the arrow function. When you define a function expression (whether it's a traditional function expression or an arrow function), you typically assign it to a variable so that you can refer to and use that function later in your code.
//  hare we declare a varibble becuse we assine the function to the varioable so the we acn pass the argument to the the function also use the function leter on inside our code 
//we simply says that it is refrence to the function

// The statement "An arrow function in JavaScript is a concise way to write anonymous functions"
// means that arrow functions provide a shorter and more compact syntax compared to traditional function expressions when you need to define a function without giving it a name.
// Arrow functions are especially handy when you need to write concise code, such as in array methods like map, filter, reduce, and when using forEach, as demonstrated in the previous explanation.
func1(34);
func1(66);
func1(84);