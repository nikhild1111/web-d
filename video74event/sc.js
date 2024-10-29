let k=document.querySelector("#my");
let c="light";
let b=document.querySelector("body");
k.addEventListener("click",()=>{
    if(c==="light"){
        c="dark";
//  document.querySelector("body").style.backgroundColor="black";
document.querySelector("body").classList.add("dark");
document.querySelector("body").classList.remove("light");
    }
    else{
        c="light";
        // document.querySelector("body").style.backgroundColor="white";
b.classList.add("light");
b.classList.remove("dark");
    }
    console.log(c);
});