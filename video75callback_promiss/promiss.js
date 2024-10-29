//********iiiiimmmmppp
// https://chatgpt.com/c/839268b9-92f3-4d28-a8c4-a3918de5f76f
// alert(`harry`);
// $1 then cursor go first on it
//practice user snipets
console.log('make the user snippets');
//*****promiss is basically the soloution of the callback hell problem. is the promiss of code excution that means we provide the call back to excute one after the another if due to asyncroneus nature it will excute after so we use promiss then code excute quiclly   */
// alert(``);//alt
// console.log('');
let prom1=new Promise((resolve,reject)=>{
    let a= Math.random();
    if(a<0.1){
        reject("no random number was not supporting you")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done ")
            resolve("harry")
        },3000);
    }
})
let prom2=new Promise((resolve,reject)=>{
    let a= Math.random();
    if(a<0.1){//in any if it is 0.5 then it will not resolve
        reject("no random number was not supporting you 2")
    }
    else{
        setTimeout(()=>{
            console.log("yes i am done2 ")
            resolve("harry 2")
        },1000);
    }
})
// prom1.then((a)=>{//we access resolve or reject the first argument is always value provided
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
    
// })

//always use catch becuse if  the sometimes server goes down then we can print some message to the customer so that customer will not frustrated.

//finally use  for the general creanups (to cloase the file which we open)

let p3=Promise.all([prom1,prom2])
// console.log(p3);
p3.then((a)=>
{
    console.log(a);
    
}).catch((er)=>{
    console.log(er);
    
})

// When Promise.all([prom1, prom2]) is called, a new promise (p3) is created.
// This promise will only resolve if both prom1 and prom2 resolve.
// If either prom1 or prom2 rejects, p3 will reject.

// let p3=Promise.allSettled([prom1,prom2])
// p3.then((a)=>
// {
//     console.log(a);
    
// }).catch((er)=>{
//     console.log(er);
    
// })
//there is difference in settled and resolve we use settled  if the promise is resolve or reject we want its status and value or the reason if reject
//settled means basically the reject or reslove output
// let p3=Promise.race([prom1,prom2])
// p3.then((a)=>
// {
//     console.log(a);
    
// }).catch((er)=>{
//     console.log(er);
    
// })
//in race the promiss which settled(reject or resolve) first is given as output 


// let p3=Promise.any([prom1,prom2])
// p3.then((a)=>
// {//here only the promiss which resolve first is print that means second promiss in this becuse of the time is prom1 is not print even it is resolve 
//     console.log(a);
    
// }).catch((er)=>{
//     console.log(er);
    
// })
//any waits for the first promise to fulfill (no reject) and its result is the output if all promiss are reject then through aggregeterror 

// let p3=Promise.resolve("my")
// p3.then((a)=>
// {
//     console.log(a);
    
// }).catch((er)=>{
//     console.log(er);
    
// })
// //it makes the promiss which is resolve with the given value 
// let p4=Promise.reject("uuuuuu")
// p4.then((a)=>
// {
//     console.log(a);
    
// }).catch((er)=>{
//     console.log(er);
    
// })
//it makes the promiss which reject with the given value 
//////********* */
// setInterval(() => {
//     console.log('This message appears every 2 seconds');
//   }, 2000);

// let timeoutID = setTimeout(() => {
//     console.log('This will not run');
//   }, 2000);
//   clearTimeout(timeoutID);
//   let intervalID = setInterval(() => {
//     console.log('This will not run repeatedly');
//   }, 2000);
//   clearInterval(intervalID);
//************* */



// *********chat gpt***********

// An asynchronous operation is a process that allows a program to initiate an action and move on to another task before the previous action has completed. This is crucial for tasks that take an unpredictable amount of time, such as network requests, file I/O, or timers. Asynchronous operations help keep programs responsive and efficient by avoiding the blocking of execution flow.

// Callbacks, Promises, and Async/Await:

// Callbacks: Functions that are passed as arguments to be executed once the asynchronous operation completes.
// Promises: Objects representing the eventual completion (or failure) of an asynchronous operation, allowing chaining of operations.
// Async/Await: Syntax built on promises, providing a more readable and straightforward way to write asynchronous code.
// Examples
// Callbacks
// javascript
// Copy code
// // Asynchronous operation with a callback
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = 'Fetched data';
//         callback(data);
//     }, 1000);
// }
// Visualization of Execution Flow
// fetchData is called with a callback function.
// Inside fetchData, setTimeout schedules an anonymous function to run after 1 second.
// The main program continues to run (if there were more code here, it would execute immediately).
// After 1 second, the anonymous function runs:
// It sets data to 'Fetched data'.
// It calls the callback function with data.
// The callback function logs 'Fetched data' to the console.
// This demonstrates the non-blocking nature of asynchronous operations, where the main program can continue executing other tasks while waiting for the asynchronous task to complete.
// fetchData((result) => {
//     console.log(result); // 'Fetched data' after 1 second
// });
// Promises
// javascript
// Copy code
// // Asynchronous operation using a promise
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = 'Fetched data';
//             resolve(data);
//         }, 1000);
//     });
// }

// fetchData().then((result) => {
//     console.log(result); // 'Fetched data' after 1 second
// }).catch((error) => {
//     console.error(error);
// });
// Async/Await
// javascript
// Copy code
// // Asynchronous operation using async/await
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = 'Fetched data';
//             resolve(data);
//         }, 1000);
//     });
// }

// async function getData() {
//     try {
//         const result = await fetchData();
//         console.log(result); // 'Fetched data' after 1 second
//     } catch (error) {
//         console.error(error);
//     }
// }

// getData();