console.log("this is website about bussness name genrator")



let adjective={
    1:"Crazy",
    2:"amazing",
    3:"fire",
}

let sname={
    1:"Engine",
    2:"Foods",
    3:"Garments",
}

let aword={
    1:"Bros",
    2:"Limited",
    3:"Hub",
}
let a,b,c;
let r=Math.random();
console.log("random number is :"+r)
// for (let i = 1; i <= 3; i++) {
    
    
//     for (let j = 1; j <= 3; j++) {
      
   
//     for (let k = 1; k <= 3; k++) {
//         console.log("Bussness Name IS : ",adjective[i],sname[j],aword[k]);
//       }
//   }
// }

if(r<0.1){
    a=b=c=1;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.15){
    a=b=1;
    c=2;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.2){
    a=b=1;
    c=3;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.25){
    a=1;
    b=2;
    c=1;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.3){
    a=1;
    b=2;
    c=2;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.35){
    a=1;
    b=2;
    c=3;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.4){
    a=1;
    b=3;
    c=1;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.45){
    a=1;
    b=3;
    c=2;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.5){
    a=1;
    b=3;
    c=3;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.55){
    a=2;
    b=1;
    c=1;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.6){
    a=2;
    b=1;
    c=2;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.65){
    a=2;
    b=1;
    c=3;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.7){
    a=2;
    b=2;
    c=1;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.75){
    a=2;
    b=2;
    c=2;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.8){
    a=2;
    b=2;
    c=3;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}

else if(r<0.85){
    a=2;
    b=3;
    c=1;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else if(r<0.9){
    a=2;
    b=3;
    c=2;
    console.log(adjective[a],sname[b],aword[c])
}
else if(r<0.95){
    a=2;
    b=3;
    c=3;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}
else{
    a=3;
    b=1;
    c=1;
    console.log("Bussness Name IS : ",adjective[a],sname[b],aword[c])
}


