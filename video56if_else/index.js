console.log("Hello i am conditional tutorial")
let age=2;
let grace=2;
//expression is the fragment of code that means it haveing two or more tehn two value and it will return a single value
age +=grace;
// age -= grace;
console.log(age)
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

/*
I am a 
multiline 
comment
*/

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c)
/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = b - a;
}

*/
if("3"==3){
    console.log("return true");
}
if("3"===3){
    console.log("return true");
}
else{
    console.log(" when you use = = = operator then data type  and value both are check so it is not true")
}
if("a"!=="3"){
    console.log("return true");
}
else{
    console.log(" when you use ! = = operator so if data type is not equal or the vallue is not equal it will rwturn true ")
}