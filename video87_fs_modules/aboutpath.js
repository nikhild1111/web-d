import path from "path"//here path is the path module
// console.log(path);
let mypath="C:\\Users\\domad\\OneDrive\\Documents\\Desktop\\allcode\\web d\\video87_fs_modules\\harry.txt";//here we use \\ instead of \ because may be compliler read ir is a escape sequence charector
console.log("THE PATH NAME IS"+path.extname(mypath));//it will show us which type of file it is it shows extention offile
console.log(path.dirname(mypath));//this will show directory name
console.log(path.basename(mypath));//this will show basename

console.log(path.join("c:/" ,"programs\\harry.txt"));//here even first path is / and second path is \\ based compiler will joind it according tot he system and give us