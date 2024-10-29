// html collection dont have for each method
// a+r(b-a)//it gives random number between a to b
// Math.ceil()give integer number

console.log("this about ex-12")

// let boxes=document.getElementsByClassName("box")
// let boxes=document.querySelector(".container").children
// console.log(boxes)

// The math.ceil() function is a method used in many programming languages, including Python and JavaScript, to round a given number up to the nearest integer. Here's how it works:

// Given a decimal number, math.ceil() rounds it up to the nearest integer, regardless of the fractional part.
// For example:
// math.ceil(4.3) returns 5 because 4.3 rounded up is 5.
// math.ceil(9.8) returns 10 because 9.8 rounded up is 10.
// math.ceil(-5.7) returns -5 because -5.7 rounded up is -5 (it's moving towards positive infinity).

// function getrandomcolor(){
//     let val1=Math.ceil(0+Math.random()*255);
//     let val2=Math.ceil(0+Math.random()*255);
//     let val3=Math.ceil(0+Math.random()*255);
//     return `rgb(${val1} ,${val2} ,${val3})`
// }

// // we can not use array method on a html collection which will rwturn by document.querySelector(".container").children property but we can use array method on node list return by document.querySelectorAll(".box")
// Array.from(boxes).forEach(e => {//thats why we convert it into the array
//     e.style.backgroundColor=getrandomcolor()
//     e.style.color=getrandomcolor()

// });


// let boxes = document.querySelectorAll('.box');
// This line selects all elements with the class box and assigns them to the boxes variable. boxes is a NodeList.
let boxes= document.querySelectorAll('.box')
for(var i=0;i<boxes.length;i++){
    var box=boxes[i];
    //genrate the random color(1677721 is white in decimal)
    var ran="#"+Math.floor(Math.random()*16777215).toString(16);
    var ranb="#"+Math.floor(Math.random()*16777215).toString(16);
    //assign random color and background
    box.style.color=ran;
    box.style.backgroundColor=ranb;


    //set content to show color code
    box.textContent=ran;

}



// No, in JavaScript, the toString() method on numbers doesn't accept string arguments like "red". The toString() method in JavaScript is specifically used to convert numbers to strings, and it can optionally take a numerical argument to specify the radix (base) for numerical output, as mentioned earlier.

// Attempting to use toString("red") would result in a TypeError, as the toString() method expects either no arguments or a numeric radix value.
// In JavaScript, the toString() method is indeed available on numbers, and it can take an optional argument specifying the radix (base) for numerical output. The default radix is 10. So, if you want to convert a number to a string using a radix other than 10, you can pass that radix as an argument to toString().
// In programming, especially in languages like JavaScript and Python, toString(16) is a method used to convert a number to its hexadecimal (base-16) representation.

// For example, let's say you have the number 16. When you call toString(16) on it, you'll get its hexadecimal representation, which is "10".

// Here's how it works in JavaScript:

// javascript
// Copy code
// let number = 16;
// let hexadecimal = number.toString(16); // hexadecimal will be "10"
// console.log(hexadecimal); // Output: "10"


// In JavaScript, the querySelector method returns a collection of DOM elements, not an array. While collections have some array-like properties, they don't have all the array methods like forEach().

// Array.from() is a built-in function in JavaScript that creates a new, shallow-copied Array instance from an array-like or iterable object. It can convert array-like objects (such as DOM collections) into arrays.

// So, by using Array.from() to convert the collection returned by querySelector into an array, you enable the use of array methods like forEach() directly on it. This allows you to iterate over each element in the array and apply the desired changes.



// The difference in behavior between NodeList and HTMLCollection when it comes to using forEach is due to the fact that they are different types of collections in the Document Object Model (DOM), with slightly different properties and methods.

// NodeList returned by document.querySelectorAll is a list of nodes (usually elements) and is a non-live collection. It is designed to be compatible with methods like forEach, map, filter, and other array methods. This allows you to directly iterate over the elements using forEach.

// On the other hand, HTMLCollection returned by children property is a collection of elements, specific to the children of an element node. Unlike NodeList, HTMLCollection is live, meaning it's automatically updated when the DOM structure changes. Historically, HTMLCollection did not have built-in support for methods like forEach, so you need to either convert it to an array using Array.from or spread operator ([...children]) or iterate over it using a traditional for loop.


//*************** */
// this code return node list thats why for each loop is directly apply on boxes
// let boxes= document.querySelectorAll('.box')
// console.log(boxes)
//         function changeBgColor(){
//             let ran= Math.ceil(Math.random()*600000);
//             ranplus= '#'+ran
//             return ranplus

//         }
        
        
//         boxes.forEach((e)=>{

//             e.style.backgroundColor=changeBgColor()
//             e.style.color=changeBgColor()
//         })