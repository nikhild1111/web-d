
// append add the element at the last

//when we want  apdate the data in dom without reloding the page then we use appending
//or if we want to make  single page application 

// by using the toggle we can add the css remove the css


// It looks like you may have meant console.log and console.dir. These are both methods provided by the JavaScript console object for logging information to the browser console, which is a tool commonly used for debugging and monitoring the execution of JavaScript code in web browsers.
// console.log: This method is used to log messages to the console. You can pass any number of arguments to console.log, and it will print each argument to the console. 

// console.dir: This method is used to display a list of properties(id,class,protype and so on) of a specified JavaScript object in a tree-like structure. It can be helpful when you want to inspect the properties of an object in more detail.

var myDiv = document.getElementsByClassName("box")
console.dir(myDiv);
// Certainly! The console is a built-in object in JavaScript that provides access to the browser's debugging console. It's commonly used by developers to log(show or print) information, such as variables, objects, errors, and messages, during the execution of JavaScript code.

console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").outerHTML)


// In the context of web development and the Document Object Model (DOM), a "node element" typically refers to an individual element within the DOM tree.

// Each element in an HTML document, such as <div>, <p>, <span>, <img>, etc., is represented as a node in the DOM.
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").textContent)

//hidden :- by using hidden atttibute and dom property we can specifys that the perticular element is visible or not 
//by using element.hidden=true; we add hidden attribute in js and it will be hidden from display 
// Hidden Elements: In HTML, you can hide elements from being displayed on the page using CSS or JavaScript. This is often done by setting the CSS display property to none or by manipulating the hidden attribute of the element.
// html
// Copy code
// <div id="hiddenElement" style="display: none;">This element is hidden.</div>
// javascript
// Copy code
// const hiddenElement = document.getElementById('hiddenElement');
// hiddenElement.style.display = 'none';


// document.querySelector(".container").hidden=true;

document.querySelector(".box").innerHTML="never never give up"
// document.querySelector(".box") selects the first element in the document with the class name box.
// .innerHTML accesses the HTML content inside that element.
// ="never never give up" assigns the new HTML content, replacing any existing content inside the element.
console.log(document.querySelector(".box"))
console.log(document.querySelector(".container").hasAttribute("Style"))
console.log(document.querySelector(".box").hasAttribute("Style"))
console.log(document.querySelector(".box").getAttribute("Style"))
console.log(document.querySelector(".box").setAttribute("Style","color:blue; background-color: black;"))
// The setAttribute() method of the Element interface sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// Your JavaScript code attempts to set the style attribute of an HTML element with the class .box using the setAttribute() method. However, the setAttribute() method only takes two arguments: the name of the attribute and its value. If you want to set multiple CSS styles, you should either concatenate them into a single string or use the style property directly.

console.log(document.querySelector(".box").attributes)
document.querySelector(".box").removeAttribute("id")//only id not #id

// document.designMode="on"//by using this we can change any website web page


console.log(document.querySelector(".box").dataset)
console.log(document.querySelector(".box").dataset.createdby)//it gives direct value for attribute name
// after data all are avaliable just like key value pair data- is ignored

//insert method dinamicly insert the element in html


// document.createElement("div") creates a new div element but does not add it to the document.
let div=document.createElement("div");
div.innerHTML="i am created element  <b> by append </b>"
div.setAttribute("class","created")

// The properties and attributes in the code snippet you mentioned are set using the div variable, which refers to the newly created div element. The div variable is used to manipulate the DOM element directly through JavaScript.
// div.className="cre"
// document.querySelector(".container").append(div)
// document.querySelector(".container").prepend(div)
// document.querySelector(".container").before(div)
document.querySelector(".container").after(div)
// document.querySelector(".container").replaceWith(div)//it will replce div with this
//when we want  apdate the data in dom without reloding the page then we use appending
//or if we want to make  single page application 





// The insertAdjacentHTML method is used to insert HTML into the DOM at a specified position relative to an element. The method takes two arguments:

// The position relative to the element where the HTML should be inserted.
// The HTML string to be inserted.


//********** */ If you use both append and insertAdjacentHTML("afterbegin") on the same element, the order in which the content appears depends on the order in which the methods are called in your JavaScript code.*********

let cont=document.querySelector(".container")
cont.insertAdjacentHTML("afterend","<b> i a,m a good boy</b>")
cont.insertAdjacentHTML("beforeend","<b> i a,m a good boy</b>")
cont.insertAdjacentHTML("beforebegin","<b> i a,m a good boy</b>")
cont.insertAdjacentHTML("afterbegin","<b> i a,m a good boy</b>")

let div2=document.createElement("div");
div2.innerHTML="i am created element  <b> by append </b>"
div2.setAttribute("class","created2")
cont.insertAdjacentElement("afterbegin",div2)
// The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.
// insertAdjacentElement(position, element)


cont.insertAdjacentText("afterend","i am a nikhil")
// insertAdjacentText(where, data)
// The insertAdjacentText() method of the Element interface, given a relative position and a string, inserts a new text node at the given position relative to the element it is called from.


// The document.getElementById("my").remove(); statement is used to remove an element with the specified id from the DOM. Here's a step-by-step explanation of how it works and an example to illustrate its usage:
document.getElementById("my").remove();

// className gets or sets the value of the element's class attribute as a string.
// cont.className = "anotherClass";

// let myElement = document.getElementById("myElement");
//         // Get the className property
//         let className = myElement.className;

//         // Log the className
//         console.log("className: ", className);
console.log(cont.classList)
console.log(cont.className)


// classList returns a live DOMTokenList collection of the class attributes of the element.
// cont.classList.add("nikhil")
// cont.classList.add("nikhil")//it will add the class only ones
cont.classList.remove("red")


console.log(cont.classList.toggle("bg_green"))
// cont.classList.toggle("bg_green")//if present then remove if remove then present

console.log(cont.classList.contains("bg_green"))