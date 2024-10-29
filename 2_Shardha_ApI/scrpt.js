const URL="https://cat-fact.herokuapp.com/facts";
let p=document.createElement("p");
let b=document.createElement("button");
var element = document.getElementsByTagName('body')[0]; // Access the first element in the collection
if (element) {
    // element.insertAdjacentElement('beforebegin', p); // Modify according to your needs
    // insertAdjacentElement('beforebegin', p) is attempting to insert p before the <body> tag, which is not allowed because the <body> tag must remain within the <html> element. The method beforebegin is intended to place an element right before the target element, but since <body> is the first element inside <html>, this operation is invalid.

    element.insertAdjacentElement('afterbegin', p);
}



//using a async await
// const getfact = async () =>{
//      console.log("getting a data....");
//      let response =await fetch(URL);
//      console.log(response);
//      let data =await response.json();
//      console.log(data);
//      console.log(data[0].text);
//     //  let n=Math.ceil(0+Math.random()*4);
//      let n=Math.floor(0+Math.random()*5);

//      console.log(n);
// //     let val3=Math.ceil(0+Math.random()*255);
//      p.innerText = data[n].text;
//     //  p.setAttribute("class","fact")
//     //  wrong this was wrong beacause getElementsByTagName returns the html collection and we has to use the insertAdjacentElement on a single element so select only first element
//     // xxx// document.getElementsByTagName("body").insertAdjacentElement("afterbegin",p);
   
    

// //         With (): You invoke the function immediately.
// // Without (): You reference the function so it can be invoked later.
// // function greet() {
// //     console.log("Hello!");
// // }
// // let greetFunction = greet; // No (), just a reference to the function
// // greetFunction(); // Now we call it, so it prints "Hello!"


// }
// // getfact();

// // The line p.insertAdjacentElement('afterbegin', b); inserts the button element <b> at the start of the paragraph <p>. This means the button will be inside the paragraph, appearing before any text content you later add to the paragraph.
// // p.insertAdjacentElement('afterbegin', b);
// // *****************************************
p.insertAdjacentElement('beforebegin', b);// p is inside a function so this was also a wrong because we are inserting a b befor the we are inserting the p because the function is not call till now so take the p out the functin and first insert it 
// // b.setAttribute("style","background color:blue;")// s in capital give hyphon(-) in background color and use semicolon at the last
b.setAttribute("Style","background-color:blue; width:50px; height:30px; Color:while;")
// // The setAttribute() method in JavaScript allows you to set only one attribute at a time. However, you can use it multiple times to set various attributes on an element.
b.innerText = "Click me";
// // "Style","color:blue; background-color: black;"
b.addEventListener("click" , getfact);



//using a promiss chain 
function getfact(){
    fetch(URL).then((response) => {
        return response.json();//this convert the api into json  
    }).then ((data)=>{
        console.log(data);
        let n=Math.floor(0+Math.random()*5);
        p.innerText = data[n].text;
       
    })
}

/*************************************************** */
// When you use an event listener in JavaScript, you typically pass a reference to a function rather than calling it immediately. This ensures that the function is executed only when the event occurs.
// Adding an Event Listener
// Here’s how you typically add an event listener:
// javascript
// Copy code
// document.getElementById("myButton").addEventListener("click", greet);
// In this example:
// greet is the function reference, which means it will be called when the "click" event occurs on the element with the ID "myButton".
// You do not use greet() because that would immediately invoke the function when the script runs, rather than waiting for the event.
