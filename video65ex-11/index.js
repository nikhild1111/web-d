// <!-- 
// Write a program to calculate factorial of a number using reduce and using for loops


// 6! = 6*5*4*3*2*1

// -->




let a=prompt("Enter your number :")
let r=1;
for(let i=a;i>0;i--){
  r=r*i;
}
console.log(r);

let arr=[a-1];
for(let i=0;i<a;i++){
  arr[i]=i+1;
}
const mul = (a, b)=>{
    return a*b;
}

console.log(arr.reduce(mul))
console.log(arr);


// Yes, in JavaScript, you can change the length of an array and modify its elements after declaration. Arrays in JavaScript are dynamic, meaning you can add or remove elements as needed, and you can modify existing elements as well.
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // Outputs: 5

// arr.length = 3; // Truncate the array
// console.log(arr); // Outputs: [1, 2, 3]

// arr.length = 7; // Extend the array with empty slots
// console.log(arr); // Outputs: [1, 2, 3, <2 empty items>]






// When you write let emptyArray = [3]; in JavaScript, you are creating an array with a single element, 3, rather than an empty array of length 3.

// Example of let emptyArray = [3];
// javascript
// Copy code
// let emptyArray = [3];
// console.log(emptyArray);       // Outputs: [3]
// console.log(emptyArray.length); // Outputs: 1
// If you want to create an empty array with a specific length (e.g., 3), you should use the Array constructor:

// Creating an Empty Array with a Specific Length
// javascript
// Copy code
// let emptyArray = new Array(3);
// console.log(emptyArray);       // Outputs: [ <3 empty items> ]
// console.log(emptyArray.length); // Outputs: 3
// Filling an Array with a Specific Value
// If you want to initialize an array of a specific length with a specific value, you can use the fill method:

// javascript
// Copy code
// let filledArray = new Array(3).fill(0);
// console.log(filledArray);       // Outputs: [0, 0, 0]
// console.log(filledArray.length); // Outputs: 3
// Example of Using an Array with a Specific Length
// Here is an example demonstrating how to create and manipulate an array with a specific length:

// javascript
// Copy code
// // Create an array of length 3 with undefined elements
// let myArray = new Array(3);
// console.log(myArray);       // Outputs: [ <3 empty items> ]
// console.log(myArray.length); // Outputs: 3

// // Initialize all elements to a specific value
// myArray.fill(1);
// console.log(myArray);       // Outputs: [1, 1, 1]

// // Update specific elements
// myArray[1] = 5;
// console.log(myArray);       // Outputs: [1, 5, 1]

// // Iterate through the array
// for (let i = 0; i < myArray.length; i++) {
//   console.log(`Element at index ${i} is ${myArray[i]}`);
// }
// // Outputs:
// // Element at index 0 is 1
// // Element at index 1 is 5
// // Element at index 2 is 1
// By using the Array constructor and methods like fill, you can create and work with arrays of a specific length in JavaScript.