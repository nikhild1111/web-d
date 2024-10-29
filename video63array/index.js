// array is mutable we can change array directly


//****** * in delet function element is delete but its space is as it is means memory is allocated as it is in array but value is not present there
//***** * so when we print the length length is as it is


//for in loop is use in object
//****if statement is use becuse some object are bult in object which have some propery which are not there own property they are addeed property (inherited) and so if we dont want that property we want onlly objects relevent property then we use if in loops 




// In JavaScript, the range for the number and bigint data types are different due to their respective underlying representations and purposes:

// ### Number

// - *Type:* Double-precision floating-point (64-bit).
// - *Range:*
//   - Smallest positive value: \( 5 \times 10^{-324} \) (approximately).
//   - Largest positive value: \( 1.7976931348623157 \times 10^{308} \).
//   - Smallest negative value: \( -1.7976931348623157 \times 10^{308} \).
//   - Can also represent special values like NaN (Not-a-Number), Infinity, and -Infinity.

// ### BigInt

// - *Type:* Arbitrary-precision integer.
// - *Range:*
//   - Essentially unlimited, constrained only by the memory available.
//   - Can represent very large integers beyond the safe integer limit for number, which is \( 2^{53} - 1 \) (or \( 9007199254740991 \)) and its negative counterpart \( -(2^{53} - 1) \).

// In summary:
// - *Number*: Used for most general-purpose calculations and offers a wide range but with some precision limitations.
// - *BigInt*: Used for representing and manipulating large integers precisely without the limitations of the number type's safe integer range.






let arr=[1,2,3,4,5]   

arr[0]=66;
arr[1]=arr[0];
console.log(arr);
console.log(arr,typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr.toString());
console.log(arr.join(" mala-"));
console.log(arr.pop())
console.log(arr.push(100))
console.log(arr.push("harry"))
console.log(arr);
console.log(arr.shift())
console.log(arr.unshift("my"))
console.log(arr);
// delete arr[9]//undefined
// console.log(arr[9]);//undefined
delete arr[4]
console.log(arr);
let arr3=[111,"a",2,"m",333,"b",44,5]
let arr2=[1,23,3,43,59]

console.log( arr.concat(arr3,arr2));
console.log(arr);

//   localeCompare() is a method used for comparing strings based on their locale-specific ordering. It's not meant for numerical comparison.
// console.log(arr1.sort());
// console.log(arr1);

// arr2.splice(1,3);//delete from 1 to 3
console.log(arr2);//it change the present array
arr2.splice(1,3,22,3);//delete from 1 to 3 and add the 22 ,3 in that space
console.log(arr2);
console.log(arr3.slice(4));
console.log(arr3);
console.log(arr3.slice(2,5));//2 in 5 out
console.log(arr3);
arr3.reverse();
console.log(arr3);





