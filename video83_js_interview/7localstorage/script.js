let ans=localStorage.getItem("tt");//this is for getting a existing note from local storge
if(ans){
    document.querySelector(".note").innerHTML=ans;//this is for storing in inner local storage
}



function savenote_to_local_storage(kk){
    localStorage.setItem("tt",kk);
}
document.querySelector("button").addEventListener("click",()=>{
let kk=prompt("enter your note");
savenote_to_local_storage(kk);
document.querySelector(".note").innerHTML=kk;//this is for storing in new note in local storage so that inner storageis changed
}
);


//we can also add the object in local storage
// let a={
//     "a":1,
//     "b":2,
// }
// let k=JSON.stringify(a);
// localStorage.setItem("obj",k);
// localStorage.getItem("obj");
// document.querySelector(".obj").innerHTML=k;
// let d=JSON.parse(localStorage.getItem("obj"));