
 function rever(str1){

let str=str1;
let strin="";
let s=str;
let newst =str.length-1;
for(let i=newst ;i>=0;i--){
     strin=strin+str[i];
 
}
strin=strin+str;

console.log(strin);//string are immutable we cannot change it so value is as it is even if perform the opration
 }


rever("i am nikhil domade");
rever("kay chalu a nikhil domade");
