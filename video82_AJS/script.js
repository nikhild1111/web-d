console.log(a1) //if we are difining the variable in function and do the consol,log(a1) then it will give error for use outside the function then we has to difind a1 globaly 
//also we do hoating using function if we not difind it with const
async function sleep() {
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            resolve(45);
        },1000);
    })
    // https://chatgpt.com/
}
// An IIFE is a function that is executed right after it is defined. This ensures that the function runs in its own scope and does not interfere with other functions or variables in the same scope.
(async function main(){
    let a=await sleep()
    console.log(a)
    let b=await sleep()
    console.log(b)
  
})()
//this is an IIFE this function is invoked as long as it is created no need to give call to it


// async function main(){
//     let a=await sleep()
//     console.log(a)
//     let b=await sleep()
//     console.log(b)
// }
// main()
// JavaScript allows function redefinitions within the same scope without throwing an error, unlike some other programming languages where redefining a function with the same name results in a compilation or runtime error. This behavior is due to JavaScript's dynamic nature and its handling of variable and function declarations within its scopes.
//****here second function override the first one and the second one is called even we call the main() before we difining the second main() function the second function is called twise and first one is override
//because it is asnc function or other function even the first function haveing less excution time second one override first one

// function Sum(a,b,c){
//     return a+b+c;
// }
 async function main(){
    // var a1//here
    console.log(a1)
    let a=await sleep()
    console.log(a)
    let b=await sleep()
    console.log(b);
    let x,y=[5,6]; 
    console.log(x, y);

    let [h,k]=[1,5,7];//get h,k from array and 7 is as it is
    console.log(h, k);

    let [l,m,...o]=[1,5,7,
        79,4,3,7];
    // here l,m,o are the variable l=1,m=5,and ...o=allthe rest atom
    console.log(l,m,...o)//only o not ...o then only7 will come because ... is the destructuring
{
let obj={
a:1,
b:2,
c:3
}
let {a,b}=obj; //get the  a,b from an array
console.log(a,b);
}

let arr=[1,2,3,4,5]
console.log(Sum(arr[0],arr[1],arr[2]))
console.log(Sum(...arr))//this two line give the same answer ...arr is the spread oprator means array ko khol do
// ...arr=//{0:1,1:2,2:3}like this



//hoisting is only for var
// let a1=6;//this will give error if we difind with let 
var a1=699;//this will not give error if we difind with var but it does not print he value of a1 it transfer only var a1 at the top of the function(inside function) sp we get undifind in answer 
console.log(a1)
}

main()

// let x,y=[5,6];if we difind this function outside the async main() then excute immigetly so difind this in a async so it wait for long time
// console.log(x,y);

var a1=699;
function Sum(a,b,c){
    return a+b+c;
}//if we difind the function without const and let then work even if we difind after the initialisation

// const sum = async (a, b, c)=>{
//     return a+b+c
// }//but this will not work