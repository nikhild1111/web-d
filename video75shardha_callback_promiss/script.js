// function sum(a,b){
//     console.log(a+b);
// }
// function cal(a,b,sumcallback){
//     sumcallback(a,b);
// }//here a,b are the ;local variable and also the sumcallback is excute in side it (its jus like we excute arrao function or the sum function) inside it
// // cal(1,3,(a,b)=>{
// //     console.log(a+b);
// // })
// cal(1,3,sum);



// function cal(a,b){
//     (a,b)=>{
//         console.log(a+b);
//     }
// }
// cal(1,3);


// Yes, you can write a function inside another function in JavaScript. This is called a nested function or inner function. The inner function is defined and accessible only within the scope of the outer function, meaning it can't be called from outside the outer function.

// Example of a Nested Function
// javascript
// Copy code
// function outerFunction(x) {
//     // This is the outer function

//     function innerFunction(y) {
//         // This is the inner function
//         console.log(x + y);
//     }

//     // Call the inner function inside the outer function
//     innerFunction(5);
// }

// outerFunction(3);  // Output: 8


// ************

// for(let i=0;i<5;i++){
//     let str="";
// for(let j=0;j<5;j++){
//    str=str+j;
// }
// console.log(str);
// }
// // ***************
// // callback
// function getData(dataid,getnext) {
//    setTimeout(()=>{
//     console.log("data",dataid);
//     if(getnext){
//         getnext();
//     }
//    },2000
// );
// }
//we want this data between 2 sec delay time but we not get it so we use callback
// getData(1);
// getData(2);
// getData(3);


//we use callback if we are getting data from user if our username is wrong then no need to get password we can directly put message
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//            getData(4);//****if we wrte one settimeout inside another then innner one is excuted after the outer one so when we return one getDaya inside another then we are using one settimeout inside another  */
//         })
//     })
// })
//this will create the callback hell problem so we use promiss

// ****************************************************************
//promiss chain
// function getData(dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("success");
//         }, 5000
//         );
//     });
// }

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     })
// });

//actual chaining
// getData(1).then((res) => {
//     return getData(2);
// }).then((res) => {
//     return getData(3);
// }).then((res) => {
//     console.log("success");
// });

// **************************************
// promiss

// let promiss =new promiss((resolve ,reject)=>{
//     console.log("i am a promiss");
//     reject("some error occured");
// });


// function getData(dataid,getnext) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//            resolve("aaa");
//             if(getnext){
//                 getnext();
//             }
//            },2000
//         );
//     })  ;
//     }

// let res=getData(123);
// console.log(res);
//here when we print res it gives promiss which is pending but after 2 sec the output is print answer then if we print res then promiss is full filled and we get promiss fulfilled  but if the answer is not a value eror is genretated then promiss rejected we get

// *********************
// const getpromiss = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am a promiss");
//         // reject("error aa gayo bhaya");
//         resolve ("output aa gayo bhaya");

//     });
// };

// let promiss = getpromiss();
// //if we use then it will excute only if promiss fullfilled
// promiss.then((ans) => {
//     console.log("resolve:" ,ans);
// });
// promiss.catch((err) => {
//     console.log("rejected :", err);
// });
// *************************

// promiss chain
// function asyncfun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success1");
//         }, 2000);
//     });
// }

// function asyncfun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success2");
//         }, 2000);
//     });
// }

// *********************
/////// if we use this then both fetching data1....... and fetching data2....... is print and promiss print simulteneusly so we use one then inside another
// console.log("fetching data1.......");
// let p1=asyncfun1();
// p1.then((res)=>{
//     console.log(res);
// });
// console.log("fetching data2.......");
// let p2=asyncfun2();
// p1.then((res)=>{
//     console.log(res);
// });
///////

//promiss chain
//it print second data after first then is resolved
// console.log("fetching data1.......");
// let p1 = asyncfun1();
// p1.then((res1) => {
//     console.log(res1);
//     console.log("fetching data2.......");
//     let p2 = asyncfun2();
//     p2.then((res2) => {
//         console.log(res2);
//     });
// });
// /\**********
// console.log("fetching data1.......");
// asyncfun1().then((res1) => {
//     console.log(res1);
//     console.log("fetching data2.......");
//    asyncfun2().then((res2) => {
//         console.log(res2);
//     });
// });

// ***************************************
// async await


// async function asyncfun2() {
//     console.log("data2")
// }
// //async function always return a promiss
// console.log(asyncfun2());

// *************************************
function getData(dataid) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("ss");//if we not resolve or reject prommiss then nes=xt data is not excute
        //   reject("ll");//if we use reject then first data is excute and no further await is excute error massege is excute and excution of data is stop data 1,2,3,4 not excute
        },2000
        );
    })  ;
    }


// async function Main(){
// await getData(1);
// await getData(2);
// await getData(3);
// await getData(4);
// await getData(5);
// }
// Main();

// console.log("i am outside");//this will excute because its not in a async function

// *******************
// iife

(async function (){
let m=getData(1);
console.log(m);//if we not use await then it will directly not  give resolve value it will give promiss which fullfiled or pending on which we use then to get resolve value or error if reject
m.then((v)=>{
    console.log(v);
})

let k=await getData(1);
console.log(k);//if we use awit then it will directly give resolve value or error if promiss not fullfilled
await getData(2);
await getData(3);
await getData(4);
await getData(5);
})();//it is only excute only ones