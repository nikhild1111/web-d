// callback function is the fun which go inside another function and run
console.log("harry is haker")
console.log("rohan is haker")
//this was the syncronous neture of js first return excute first every time this will not hapend  there are sum asyncronuse function in js which was  ignored  for excusion at last

setTimeout(() => {
    console.log("i am inside settimeout")
}, 20);
// this two excute after two second but the code  which was present is excute first
setTimeout(() => {
    console.log("i am inside settimeout 2")
}, 0);
console.log("the end");

//also set timeout is the callback function inside which we pass fun and arg

const fn = (arg, callback) => {
    console.log(arg);
    callback();
    // setTimeout(() => {
    //     console.log("i am inside settimeout")
    // }, 20);
}

const Do = (arg, callback) => {
    console.log(arg);
    callback();
}


// const callback = (arg, fn) => {
//     console.log(arg);
//     fn();
// }

// // anfn
// // call back fun is the functionnwhich can pass as an argument two the another fun which can use it according to its own why
// const callback=(arg)=>{
//     console.log(arg);
// }


// In the code snippet sc.onload = callback("harry");, sc is likely a reference to a <script> element, and onload is an event handler that gets executed when the script is fully loaded.
// However, the code as written is problematic. Assigning callback("harry") directly to sc.onload means the callback function is called immediately, and its return value (if any) is assigned to sc.onload. This is not the intended behavior if you want the callback function to be called when the script loads.
const loadScript = (src, callback) => {
    // The name callback is not required but is commonly used for clarity. You can use any name for the callback parameter, as long as you use the same name consistently within the function body
    let sc = document.createElement("script");
    sc.src = src;

    //   sc.onload=callback("harry");
    sc.onload = callback("harry", fn);
    //   sc.onload = () => callback("harry", fn);
    //     document.head.append(sc);//another method for beter excution
    document.head.append(sc);
}
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)






// The callback function is assigned to the onload event of the script element. This ensures that the callback will be called only after the script has been successfully loaded. The callback chain demonstrates how asynchronous operations can be handled in JavaScript, where one operation is triggered after another completes.

// This pattern is commonly used for loading external resources like scripts, images, or stylesheets, ensuring that dependent code only executes after the necessary resources are available.
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
    console.log(arg);
    fn("first", () => {
        Do("second", () => {
//here besically the (arg, fn) => { fun is assign to callbak fun then it will called after the scipt is loaded then fn and to will call
        });
    });
})

// here inside one callbak function there is another callback function and again another call back function so code is more complex this is called (callback hell)pyramid of dom
//becuse of this code is more complex to handle thats why we use promisses












//*********
// what was difference in event handeler and event listenr
// ChatGPT
// Event handlers and event listeners are both used to handle events in JavaScript, but they differ in how they are attached and managed. Here’s a detailed comparison:
// Definition: An event handler is a property (like onclick, onload, etc.) that is set to a function that will be called when the event occurs.
// element.onclick = function() {
//     // Code to execute when the element is clicked
// };

// Definition: An event listener is a function that listens for an event to occur and can be added using methods like addEventListener.
// element.addEventListener('click', function() {
//     // Code to execute when the element is clicked
// });


// Therefore, in your specific example, the callback handling within loadScript is synchronous unless fn or Do contain asynchronous operations themselves.

console.log("callback")