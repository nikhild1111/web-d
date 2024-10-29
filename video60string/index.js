// java script is first made to work in broweser
 //it is forgiving 
 //it gives less error

 
// An escape sequence in programming, including in JavaScript, is a sequence of characters that has a special meaning when encountered in a string. It usually begins with a backslash \ character followed by one or more characters.
// In many programming languages, including JavaScript, Python, Java, C, and C++, escape sequences are typically represented by a backslash (\) followed by one or more characters. When the compiler or interpreter encounters an escape sequence in a string, it interprets it as a special character rather than its literal representation.

console.log("HelloWorld dffgghhh\ruyiyyyyyyyyyyyy");

// The escape sequence \r is a carriage return character commonly used in various programming languages. It represents a control character that moves the cursor or print head to the beginning of the current line.
// blur.length is property it gives value and b.toUppercase() is the function we have to use ()



// string is immutable we cannot chage it we are creating a new string in compiler using the function

console.log("This is string tutorial ")
let a="Harry";

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// console.log(a[5]) it is undifind

console.log(a.length)

let my="harry"
let your="nikhil"
console.log("'his name' is" + my + "and his friends name is " + your)
console.log(`'his name is${my} and his friends name is  ${your}`)
console.log(`his 'name is${my} "and his friends name is"  ${your}`)

let b="shivamsh tt"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(a.slice(1,4))
console.log(a.slice(3))
// Blank space is also considered as part of the array/string
// console.log(b[8]); // 't'
// console.log(b[8])//blank space also consider as an array
let j=b.replace("sh","77");
console.log(j)
let c=b.concat(j,b,a,"i","am","a","devloper")
console.log(c)
console.log("string are immutable thats why it is as it is even tho we perform operation on it"+b)

console.log("escape sequence characters ")
// let es='sdf fffds 'jfjsf' this will happend wrong
let es='sdf fffds "jfjsf'
let s="sdf fffds 'jfjsf"
// we can use single cote inside double cote and double cote inside the single cote
//but when we want to write single cote inside a single cote thene we use escape sequence character
console.log(es) 
console.log(s) 

let s1="sdf fffds \"jfjsf"
console.log(s1) 
let es1='sdf fffds \'jfjsf'
console.log(es1)
let es2='sdf fffds \njfjsf'
console.log(es2)
console.log("HelloWorld dffgghhh\ruyiyyyyyyyyyyyy");
console.log("HelloWorld dffgghhh\tuyiyyyyyyyyyyyy");

//concatenation
let ni="nikhil"
console.log(ni.charAt(0))
console.log(ni.charAt(100))
console.log(ni.indexOf("kh"))
console.log(ni.indexOf("khu"))//it gives -1 answer
console.log(ni.endsWith("il"))
console.log(ni.startsWith("ni"))
console.log(ni.endsWith("ni"))

let n="    nikhil"
console.log(n);
let k=n.trim();
console.log(n);//string are immutable we cannot change it so value is as it is even if perform the opration
console.log(k);