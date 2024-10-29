// let arr = [1, 13, 5 ,7, 11];
// // let newArr = []
// // for (let index = 0; index < arr.length; index++) {
// //     const element = arr[index];
// //     newArr.push(element**2)
// // }
// // console.log(newArr)



// // map function is just like a for each loop it itarates through all the array element and perform som some opration on them and create an new array
// // let newarr=arr.map((value,index ,arr)=>{
// //     return value*value;
// // })
// // console.log(newarr)


// //***or */
// // let newArr = arr.map((e, index, array)=>{
// //     return e**2
// // })

// // console.log(newArr)



// ////*******filter  */
// //filter function is the function which create the new arrray which having the values which pass the test or condition which we provide indide the function
// const greaterThanSeven = (e)=>{
//     if(e>7){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(greaterThanSeven))

// // reduse method reduce the array into the singke value which we can store inside the variable or we can print it directly it take the function as an argumnent which perform the opration like add sub or mul
// // const red = (a, b) => { return a + b; };: This line defines an arrow function named red that takes two parameters a and b, adds them together, and returns the result. This arrow function will be used as the callback function for the reduce() method.
// // reduce method perform opration like iot takes first two value of array perform opration on them and return it again it take return value  + next value again add it then take return value  and next value till the end perform the same opration and return the final result
// let arr2 = [1,2,3,4,5,6]

// const red = (a, b)=>{
//     return a+b;
// }

// console.log(arr2.reduce(red))

// // A callback function is a function that is passed as an argument to another function, with the intention of being called later or at a specified event or condition
// // In the context of the reduce() method:

// // The callback function is the function passed as an argument to the reduce() method.
// // It is called on each element of the array during the iteration process.
// // The reduce() method applies the callback function against an accumulator and each element in the array, from left to right, to reduce it to a single value. The callback function typically takes four arguments:


// //when we want to convert the any object to the array then we use the array.from method
// console.log(Array.from("harry"));



//internship
// var a;
//     let cities=["Paris", "Rome", "Paris", "Berlin", "Rome"];
//    let days= [3, 4, 2, 5, 1];
//      let out=[];
    
//    for (let i=0;i< cities.length;i++){
//          for (let j=i;j< cities.length;j++){
//              if(cities[j]==cities[i] && i!=j){
//                     a=days[i]+days[j];
//                 out.push(`${cities[i]}:${a}`)
                          
//        }


//       }} 
//       for (let i=0;i< cities.length;i++){
//         for (let j=i;j< cities.length;j++){
//             if(cities[j]!=cities[i] && i==j){
//                    a=days[i]+days[j];
//                out.push(`${cities[i]}:${a}`)
                         
//       }
//     }}
//      console.log(out);
     
 