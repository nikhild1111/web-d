import fs from "fs/promises"
let a=await fs.readFile("harry.txt");//it is an module hare we can directly use the await no need of async function

let b=await fs.appendFile("harry.txt","\n append text inside the file is done very clearly ");//every time if we run apend then new code is append if we not use writefile every time
console.log("here await is used so this text is shown after the await ");
let c=await fs.writeFile("harry4.txt","\n append text inside the file is done very clearly ");
console.log("here await is used so this text is shown after the await ");
let d=await fs.readFile("harry.txt");
console.log(a.toString(),"\n",b,"\n", c, "\n"," now the harry.txt file is :",d.toString());