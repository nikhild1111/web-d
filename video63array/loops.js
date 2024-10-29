let numbers = [1, 2, 3, 4, 5];

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element)
    
// }









// In JavaScript, the forEach loop is a convenient way to iterate over elements in an array. It executes a provided function once for each array element.
// The function provided as an argument to forEach will be called once for each element in the array, in ascending order.


// numbers.forEach(function(number, index) {
//   console.log(`Element at index ${index} is ${number}`);
// });
// // You can also use arrow functions for a more concise syntax:

numbers.forEach((value ,index,arr)=>{
console.log(value ,index,arr);
})

// numbers.forEach((value ,index)=>{
//     console.log(value ,index);
//     })



// /for in loop is use in object
//****if statement is use becuse some object are bult in object which have some propery which are not there own property they are addeed property (inherited) and so if we dont want that property we want onlly objects relevent property then we use if in loops 


// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

for (const value of numbers) {
    console.log(value)
}