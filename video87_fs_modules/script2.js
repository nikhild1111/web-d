import fs from "fs/promises"
let a=await fs.readFile("harry.txt");//it is an module hare we can directly use the await no need of async function

let b=await fs.appendFile("harry.txt","\n append text inside the file is done very clearly ");
console.log("here await is used so this text is shown after the await ");
let c=await fs.readFile("harry.txt");
console.log(a.toString(),"\n",b,"\n", "now the harry.txt file is :",c.toString());