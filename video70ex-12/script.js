let colar={
    1:"red",
    2:"green",
    3:"yellow",
    4:"black",
    5:"blue",
    6:"brown",
    7:"pink",
    8:"skyblue",
    9:"orange",
}
let colar2={
    1:"red",
    2:"green",
    3:"yellow",
    4:"black",
    5:"blue",
    6:"brown",
    7:"pink",
    8:"skyblue",
    9:"orange",
}


let a=Math.floor(Math.random()*9)+1;
let b=Math.floor(Math.random()*9)+1;


let c=document.querySelectorAll(".box")
console.log(c);
c.forEach(e=>{
e.style.backgroundColor=colar[a]
e.style.color=colar2[b]
})