console.log("harry")

// let boxes=document.getElementsByClassName("box")//it return all the element which contain box as a class
// console.log(boxes)
// console.log("harry")
// boxes[2].style.backgroundColor="red";
// it count from 0,1,2
// in backgroundColor '"c" is must be capital



// document.getElementById("redbox").style.backgroundColor="red";
// <!-- *************** -->
// <!-- accordin to the rule of html 5 we can not give the same id to different element which shows an error for identifying the different element with same name we use class we can give same class name to different element -->


document.querySelector(".box").style.backgroundColor="green";
//this was the quary selector it return first element which having class as box


console.log(document.querySelectorAll(".box"));
//it return a node list(collection) of all the element which having a box as a class



// document.querySelectorAll(".box").style.backgroundColor="green";//error
// <!-- The style property is typically used to modify the CSS properties of DOM elements like <div>, <span>, <p>, etc. However, arrays in JavaScript are not DOM elements, but rather data structures used for storing multiple values. Therefore, attempting to apply the style property directly to an array would result in a TypeError because arrays do not have a style property.

//     To apply styles to elements in an array, you would need to loop through each element in the array and apply the styles individually to each DOM element within the array. -->

    
// <!-- Performing a style operation on an array collection in JavaScript without using a loop would result in a TypeError. This is because arrays are not directly stylable elements in JavaScript.

// we can not use .style on html collection --></p>

// ************ */
// document.querySelectorAll(".box").forEach(e=>{
//     console.log(e)
//     e.style.backgroundColor="green";
// })


 //now it return a arraay to witch we can access by using k[i]
var k=document.querySelectorAll(".box");
 // console.log(k.length);
 for(var i=0;i<k.length;i++){
     // console.log(i);//index is just like array start from 0
    // console.log(k[i])
     k[i].style.backgroundColor="green"
 }


console.log(document.getElementsByTagName("div"));

let b=document.getElementsByTagName("div");
//it return all the div including parent
//it return html collection



// getElementsByName

console.log(k[3].matches("#redbox"));
console.log(k[4].matches("#redbox"));


console.log(k[4].closest("#redbox"));
//it return the element if it itself or its parent or its parents parents contain the given css selector
//else ir return null

console.log(k[3].closest(".container"));
console.log(k[3].closest("html"));


console.log(document.querySelector(".container").contains(k[3]));

console.log(document.querySelector(".container").contains(b[3]));

console.log(document.querySelector(".container").contains(b[0]));
//it return true it contain it self

console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))




