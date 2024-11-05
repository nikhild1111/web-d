console.log("exrsize 15")
import ex from "express"
import path from "path"
import fs1 from "fs"
import e from "express";

// let sourcepath=(__dirname);
// console.log(sourcepath);
// In CommonJS: __dirname and __filename are automatically available. You can use them directly to get the directory and file path, respectively.
// The issue here is with __dirname, which is not available in ES module (import syntax) environments in Node.js. In ES modules, __dirname and __filename are not directly accessible. Instead, you need to use import.meta.url to get the directory path.

// means only path opration are not present
// Yes, that’s correct. Only the path operations (__dirname and __filename) are not directly available in ES Modules (the import syntax) in Node.js.
// Other file system operations from the fs module (like rename, copyFile, unlink, existsSync, etc.) work the same way in both CommonJS and ES Modules. You can use them directly in ES Modules just like in CommonJS.

// we can also use the promiss

//******** */ Top-level await works perfectly in this setup, so there’s no need for an async wrapper function. Thank you for clarifying, and I appreciate your patience!
//***************** */ You're absolutely right, and I apologize for the confusion. My initial suggestion to wrap your code in an async function was unnecessary if you're working in an environment that supports top-level await (like Node.js with ES modules).
import fs from "fs/promises"

let sourcepath1="C:\\Users\\domad\\OneDrive\\Documents\\Desktop\\allcode\\web d\\video93ex-15sol";
console.log(sourcepath1);

// read directory takes the source file and return the calllback function with array of all the files and errr

let files= await fs.readdir(sourcepath1);
for (const file of files) {

    // Yes, path.extname(file) is available and works the same way in both CommonJS and ES Modules (ES6) in Node.js. You can use path.extname in ES Modules without any issues.
let ext=path.extname(file);
ext= ext.split(".").slice(-1)[0];//we dont want .part
   if(ext!=="json" && ext !=="js"){

 //   The issue with using fs1.existsSync(path.join(sourcepath1, ext)) in your code is primarily related to the following points:
// Asynchronous Context:
// You are using fs/promises which is intended for asynchronous operations. The existsSync method is part of the fs module, which provides synchronous methods. Mixing synchronous and asynchronous code can lead to unexpected behavior.
    // if(fs1.existsSync(path.join(sourcepath1,ext))){

        //if ext (the extentionn folder exirst then transfer the file from source to sistination using the rename)
        if(fs1.existsSync(path.join(sourcepath1,ext))){
          await  fs.rename(path.join(sourcepath1,file),path.join(sourcepath1,ext,file));
         }
       else{
        await  fs.mkdir(path.join(sourcepath1,ext));
        await fs.rename(path.join(sourcepath1,file),path.join(sourcepath1,ext,file));
    }
   }
};


// The code let arr = fs.readdir(sourcepath1) is incorrect because fs.readdir is an asynchronous function, which means it does not return the array of files immediately. Instead, it takes a callback to handle the result.
//so always use await( let arr = await fs.readdir(sourcepath1))