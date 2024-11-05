const fs=require("fs");//get the (fs)file module 
// const fs=require("fs/promises");//get the (fs/promises)file module  using require

// console.log(fs)//print file module in which different functions are present

console.log("start");
// fs.writeFileSync("Harry.txt","harry is a good boy");//fs.writeFileSync it is used to wright file but  it is not asncronous in nature means  not follow js rule it will wright first then next code is excute so we not use it

fs.writeFile("harry2.txt","harry is a good boy",()=>{//we always use this because it is shudual to write the file and the next code is excute after writing the file this will excute
    console.log("done");//we are giving a read file code inside the write file so thwt after writeing the file the reading file code will excute quiqly
    fs.readFile("harry2.txt",(error,data)=>{//after reading file this will excute
        console.log(error,data.toString());//the data we get in buffer form we cannot read it we has to convert it into a string so we use toString
    })//null no error
})


fs.appendFile("harry2.txt"," nikhil" ,(err)=>{//every time new nihil is append  if we write appent again and again
    if (err) {
        console.error("Error appending to file:", err);
    } else {
        console.log("Text appended successfully!");
    }//appent file only takes arror parameater  it does not print the data so use only the error
})
fs.appendFile("harry3.txt","  nikhil" ,(err)=>{//every time new nihil is append  and if the file is not present then the new file is created
    if (err) {
        console.error("Error appending to file:", err);
    } else {
        console.log("Text appended successfully!");
    }//appent file only takes arror parameater  it does not print the data so use only the error
})


//when we use writeFile then it is asyncronous in nature so that comppiler first print ending and the writeFile code is shedule for the print
//but if we use fs.writefilesync then code will stop excuting untill the file is not write
console.log("Ending");

// callback hell is created so we use promiss and fs module provide promisess into promiss/fs module
//now go to script2.js in which we use import fs from "fs/promisses" here we not use default common js modeule there for type="module" in package .json and we can not right require in this





//callback hell

// fs.writeFile("harry2.txt","harry is a good boy",()=>{//we always use this because it is shudual to write the file and the next code is excute after writing the file this will excute
//     console.log("done");
//     fs.readFile("harry.txt",(error,data)=>{//after reading file this will excute
//         console.log(error,data.toString());//the data we get in buffer form we cannot read it we has to convert it into a string so we use toString
//     })
//     fs.writeFile("harry2.txt","harry is a good boy",()=>{//we always use this because it is shudual to write the file and the next code is excute after writing the file this will excute
//         console.log("done");
//         fs.readFile("harry.txt",(error,data)=>{//after reading file this will excute
//             console.log(error,data.toString());//the data we get in buffer form we cannot read it we has to convert it into a string so we use toString
//         })
//     })fs.writeFile("harry2.txt","harry is a good boy",()=>{//we always use this because it is shudual to write the file and the next code is excute after writing the file this will excute
//         console.log("done");
//         fs.readFile("harry.txt",(error,data)=>{//after reading file this will excute
//             console.log(error,data.toString());//the data we get in buffer form we cannot read it we has to convert it into a string so we use toString
//         })
//     })fs.writeFile("harry2.txt","harry is a good boy",()=>{//we always use this because it is shudual to write the file and the next code is excute after writing the file this will excute
//         console.log("done");
//         fs.readFile("harry.txt",(error,data)=>{//after reading file this will excute
//             console.log(error,data.toString());//the data we get in buffer form we cannot read it we has to convert it into a string so we use toString
//         })
//     })fs.writeFile("harry2.txt","harry is a good boy",()=>{//we always use this because it is shudual to write the file and the next code is excute after writing the file this will excute
//         console.log("done");
//         fs.readFile("harry.txt",(error,data)=>{//after reading file this will excute
//             console.log(error,data.toString());//the data we get in buffer form we cannot read it we has to convert it into a string so we use toString
//         })
//     })})



