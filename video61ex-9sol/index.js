let random=Math.random()

// In JavaScript, the prompt() function is used to display a dialog box that prompts the user for input. It typically takes two parameters:
// var userInput = prompt("Please enter your name:", "John Doe");
// In this example, a dialog box will appear with the message "Please enter your name:" and an input field containing the default value "John Doe". The user can then input their name or modify the default value before submitting the input.

// The prompt() function returns the value entered by the user as a string. If the user cancels the prompt dialog (e.g., by pressing the cancel button), the function returns null. Therefore, it's essential to handle the case where the user cancels the prompt dialog to avoid unexpected behavior in your code.

// alert("the random number: "+random);
// It seems like you're trying to display an alert containing a random number. However, there's a small issue with the syntax. If you're attempting to use JavaScript to generate a random number and display it in an alert, you should use the Math.random() function to generate the random number and concatenate it with the string "the random number: " before displaying it in the alert. Here's the 

console.log("the random number: "+random);
let a = prompt("Enter your namber")
let b=prompt("Enter opration")
let c=prompt("Enter your namber")

let obj ={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}
//  k=obj[b];
// console.log(k);
//when we write obj[key] it return value at the key

if(random>0.1){
    //perform correct opration 
    console.log(`the result is ${a} ${b} ${c}`)
    // alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
    console.log (`the result is ${eval(`${a} ${b} ${c}`)}`)
    // eval calculate the opration and give answer
    // In JavaScript, the alert() function is used to display a dialog box with a specified message and an OK button. When the alert() function is called, it interrupts the execution of the script and displays the message to the user in a modal dialog box. The user must click the OK button to dismiss the dialog box and resume interaction with the webpage.
}
else{
    //perform incorrect opration 
     b=obj[b];
     alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}