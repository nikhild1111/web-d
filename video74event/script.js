// event means somthing is happend
//we can create costomm event but there are so many built in event in js
//we use lissnear to identify event
//***event are arising when user interact with the system using mouse or keybord anything else
// or  even are ganrated by enviroment such as battary low storage full

// addEventListener =this  function takes two argument first is the event to which we want to listen and second is the function which is to be run when the event is listen

// let button=document.getElementById("btn")
// button.addEventListener("click",()=>{
//     alert("i was click");
// })
// button.onclick=()=>{
//    document.querySelector(".box").innerHTML="<b>you are cliked</b>";
// }
// let button=document.getElementById("btn")
// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML="<b>you are cliked</b>";
// })

// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// let button=document.getElementById("btn")
// button.addEventListener("dblclick",()=>{
//     document.querySelector(".box").innerHTML="<b>you are cliked</b>";
// })

// let button=document.getElementById("btn")
// button.addEventListener("contextmenu",()=>{
//     document.querySelector(".box").innerHTML="<b>you are cliked</b>";
// })

// let button=document.getElementById("btn")
// button.addEventListener("keydown",(e)=>{
//    console.log(e,e.key,e.keyCode);//dont use keycode property
// })
//e is the event object by using this we can manipulate the event which was fired

// when we print it the event which was fired is display
//for all time this event is work then we apply it on the document
//if we want key as a number then we use key code


let button=document.getElementById("btn")
button.addEventListener("keydown",(e)=>{
   console.log(e);//dont use keycode property
   console.log(e.type);
   console.log(e.target);
   console.log(e.clientX,e.clientY);
})

// focus event also present in form
