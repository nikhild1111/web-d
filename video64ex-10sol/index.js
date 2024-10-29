
let adjective={
    1:"Crazy",
    2:"amazing",
    3:"fire",
}

let sname={
    1:"Engine",
    2:"Foods",
    3:"Garments",
}

let aword={
    1:"Bros",
    2:"Limited",
    3:"Hub",}
   

let a=Math.floor(Math.random()*3)+1;
let b=Math.floor(Math.random()*3)+1;
let c=Math.floor(Math.random()*3)+1;
console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])


// In JavaScript, the Math.floor() function returns the largest integer less than or equal to a given number. Essentially, it rounds down to the nearest whole number.

// For example:

// javascript
// Copy code
// Math.floor(3.9); // returns 3
// Math.floor(6.1); // returns 6
// Math.floor(-2.3); // returns -3
// It's particularly useful when you need to ensure that a number is rounded down to the nearest integer, regardless of whether the number is positive or negative.