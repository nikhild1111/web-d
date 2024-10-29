const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let dropdowns=document.querySelectorAll(".dropdown select");
let btn=document.querySelector("form button");
let fromCurr=document.querySelector(".from select");
let tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");




for(let select of dropdowns){
    for(currcode in countryList){
      
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name==="from" && currcode==="INR"){
            newoption.selected="selected";
        }
        //default condition
       else  if(select.name==="to" && currcode==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlage(evt.target);//target to the chage (where the change is hapend itwill give it to you)
    });
  }




  const updateFlage=(element)=>{
    let currcode=element.value;//extrecting a value from selct hare element is select
    let countycode= countryList[currcode];
    let newsrc=`https://flagsapi.com/${countycode}/flat/64.png`
    let img =element.parentElement.querySelector("img");
    img.src=newsrc;
  }
  const update =async()=>{
    let amount =document.querySelector(".amount input");
 let amnval=amount.value;
 if(amnval==="" || amnval<1){
 amnval=1;
amount.value="1";
 }
const url=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}`
let response=await fetch(URL);
let data=await response.json();
let rate =data[tocurr.value.toLowercase()];
let finalamout=amnval*rate;
msg.innerText=`${amnval} ${fromCurr.value} = ${ finalamout} ${tocurr.value}`;
}


  btn.addEventListener("click", async (evt)=>{
//*****imp by default form is submited then some action is creted to prevent thenm we use preventDafault dso controll is in our hand
 evt.preventDefault();

update();
});

window.addEventListener("load",async ()=>{
    update();
});
