// async function PlaceOrder(params) {
//     return new Promise((resolve,reject)=>{
//         let k=Math.random();
//         let h=500+10*k;
//         setTimeout(() => {
//           console.log("your order is  success",params);
      
//         },h);
//     });
// }

// async function main() {
//     for(let i=0;i<6;i++){
//      let k=prompt("Enter Order ");
//      let ans=await PlaceOrder(k);
//     //     ans.then((v)=>{
//     //     console.log(v);
//     //  })
//     }
    
// }
// main();



//this was in node js

// Function to take input
// async function PlaceOrder(params) {
//     return new Promise((resolve,reject)=>{
//         let k=Math.random();
//         let h=500+10*k;
//         setTimeout(() => {
//           console.log("your order is ",params);
//       resolve("success");
//         },h);
//     });
// }

// async function main() {
//     for(let i=0;i<6;i++){
//if we write this then its read six time
//         const readline = require('readline');

//         // Create readline interface for input/output
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });
//         rl.question("Please enter your name: ",async function(name) {
//             // console.log("Hello, " + name + "!");
//             let ans=await PlaceOrder(name);
//         //     ans.then((v)=>{//then is not in node.js
//         //     console.log(v);
//         //  })
//             rl.close(); // Close the readline interface otherwise it conteneously only take input
//         });
   
//     }
    
// }
// main();

