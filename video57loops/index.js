console.log("All the notes of loops is in the in the pdf form")
let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for(let i=0;i<100;i++){
    console.log(a+i);
}
// In summary, for...of is used to iterate over iterable objects' values, while for...in is used to iterate over an object's enumerable properties (keys).
// for...in loop iterates over the enumerable properties of an object, including its prototype chain.
// It's typically used to loop through the keys of an object, rather than its values.
// It's not recommended to use for...in loop to iterate over arrays because it may include properties inherited from the prototype chain, and the order of iteration may not be predictable.

let obj ={
    name:"nikhil",
    role:"programmer",
    company:"code with harry"
}
for (const key in obj) {
    // it will gives keys to us then we will write it in the obj and orint the value
        const element = obj[key];
        console.log(key+":"+element)
        
    }
for (const c of "harry") {
    console.log(c)
}

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i1 = 10;
do {
    console.log(i1)
    i1++;
} while (i1<6);