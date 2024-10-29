

//imp*** we have cut type=module from package.json so we can not use es6 import comand
// import {a,b,c} from "./module1.js"
// console.log(a,b,c);
// // import {harry} from"./module1.js";//wrong {} are used
// import harry from"./module1.js";
// console.log(harry);
// // import {obj} from"./module1.js";//wrong {} are used
// // console.log(obj);//wrong

//for using a require command type is cut and default type common js must be present
const a=require("./module2.js");
console.log(a,__dirname,__filename);
//in the same code we can print c
//the code which was return at the last in module from which we are exporting is shown in import file

//(function(export,require,module,__filename,__dirname){

// all variable and function like module,export ,required we use from this
// });