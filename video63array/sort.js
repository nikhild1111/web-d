// The sort() function sorts array elements as strings by default. When you call arr1.sort(), it converts all elements to strings and then sorts them based on their Unicode code points. This behavior may not give you the expected sorting result for numbers.

// In your case, the array contains a mix of numbers and strings, so when they are converted to strings, their ordering might not be intuitive. For example, "111" comes before "2" because the string "111" is "less than" the string "2" based on Unicode comparison.

// To sort the array numerically, you need to provide a custom comparison function that treats elements as numbers. Here's how you can do it:
let arr1 = [111, "a", 2, "m", 333, "b", 44, 5];
arr1.sort((a, b) => {//****it is similar to the buble sort frist compare neare elment again compare  neare alement 
    
  // Check if both elements are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    
    return a - b; // Sort numerically
  }
  // If one of them is not a number, move it to the end
  else if (typeof a === 'number') {
    
    return -1; // a comes before b
  } else if (typeof b === 'number') {
    
    return 1; // b comes before a
  }
  // If both elements are not numbers, sort them as strings
  else {
    
    return a.localeCompare(b); // Sort alphabetically
  }
});

console.log(arr1);

// arr1.sort((a, b) => {: Here, we are calling the sort() method on the array arr1 and passing a custom comparison function as an argument.

//     if (typeof a === 'number' && typeof b === 'number') {: This line checks if both a and b are numbers.
    
//     return a - b;: If both a and b are numbers, the function returns the result of subtracting b from a. This sorts the numbers in ascending order.
    
//     else if (typeof a === 'number') {: If a is a number but b is not, this block executes.
    
//     return -1;: This line returns -1, indicating that a should come before b in the sorted array.
    
//     else if (typeof b === 'number') {: If b is a number but a is not, this block executes.
    
//     return 1;: This line returns 1, indicating that b should come before a in the sorted array.
    
//     else {: If neither a nor b is a number (i.e., they are both strings), this block executes.
    
//     return a.localeCompare(b);: This line compares the strings a and b using localeCompare(), which sorts them alphabetically.
    
//     });: The custom comparison function is closed.
    
//     console.log(arr1);: Finally, the sorted array is logged to the console.
    
//     Using the custom comparison function, the array arr1 will be sorted with numbers coming before strings and sorted numerically, and strings sorted alphabetically.


// let arr1 = [111, "a", 2, "m", 333, "b", 44, 5];
// arr1.sort((a, b) => {
//   console.log(`Comparing ${a} and ${b}`);
//   // Check if both elements are numbers
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a - b; // Sort numerically
//   }
//   // If one of them is not a number, move it to the end
//   else if (typeof a === 'number') {
//     return -1; // a comes before b
//   } else if (typeof b === 'number') {
//     return 1; // b comes before a
//   }
//   // If both elements are not numbers, sort them as strings
//   else {
//     return a.localeCompare(b); // Sort alphabetically
//   }
// });

// console.log(arr1);