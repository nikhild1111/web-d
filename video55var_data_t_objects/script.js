// var is global variable its scop is global when we write it inside the bloak then outside the block also its value is same
// let is local variable type its scope is not same as globle variable
// const means constaant we can not change it
// console.log("tutorial 55")
// var a=5;
// a=a+1; 
// // it will we can do
// var _b=55;
// {
//     var a=99;
//     console.log("value of block var a " +a);
// }
// console.log("value of  var a  globle " +a);
// console.log("since value of var is same inside and outside so it is dont affect inside or outside the block but if we difind it inside the functtion then it cannot be accsesible ")
// var: Function-scoped, hoisted, and can be reassigned. Not block-scoped.
// let: Block-scoped, hoisted but not initialized, and can be reassigned.
// const: Block-scoped, hoisted but not initialized, and cannot be reassigned. It requires initialization at the time of declaration.
let a=5;
let b=6;
let c="harry";
let _a="shubham";
//var 55a=rohan;//dont start variable name with number

console.log(a +  b + 8);
 console.log(typeof a, typeof b, typeof c);
{
    let a=66;
  console.log(a);
}
console.log(a);
console.log("since value of let is not same inside and outside so it has  the block scope ")

const a1=99;
// a1=a1+99;//this is wrong dont change the value of const variable

console.log(a1);

console.log("all the primtive data types ");
let x="harry bhai";
let y=22;
let z=3.55;
let t=undefined;
let r=null;
const p=true;

console.log(x,y,z,t,r,p);
console.log(typeof x,typeof y,typeof z,typeof t,typeof r,typeof p);

// **IMP** null has stack overflow answer
//  null is the primitive data type but its typeof is object becuse we use the null in java script from very long time and   in the specification type of null is return as object most of the javascript expert found it is by mistake but we use  it from long time and most of the old code relie on it so we cannot change it

let o={
    name:"harry",
    "job code":5600,
    "is_handsome":true
    // when we have to give space then return it inside double cote
}
console.log(o);
o.sallry="100k";
//we can add key-value pair  inside object 
// also we can add object function and many more

console.log(o);
o.sallry="500k";
//we acn change value inside object
console.log(o.name);
