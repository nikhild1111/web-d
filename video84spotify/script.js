console.log("lets write js")
function convertSecondsToMinutes(seconds) {
  // Calculate the number of minutes
  const minutes = Math.floor(seconds / 60);
  
  // Calculate the remaining seconds
  const remainingSeconds = Math.floor(seconds % 60);
  
  // Format the remaining seconds with leading zero if necessary
  const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
  
  // Return the time in "minutes:seconds" format
  return `${minutes}:${formattedSeconds}`;
}
let songs=[];
let current = new Audio();
let audio;


let currentSongElement = null; // To track the currently playing li

async function  getalbum() {

  // console.log(folder);
    let a=await fetch(`http://127.0.0.1:3000/songs/`)
    let response=await a.text();//when we fetch songs from local host its give in tabled form
  
    let div=document.createElement("div");
    div.innerHTML=response;
  let as= div.getElementsByTagName("a");
  let card=document.querySelector(".card");
  let array=Array.from(as);
  for(let index=0;index<array.length;index++){
       const e=array[index];
       if(e.href.includes("/songs")){
        let folder2=e.href.split("/").slice(-2)[0];
      let a2=await fetch(`http://127.0.0.1:3000/songs/${folder2}/info.json`)
      let response2=await a2.json();
      card.innerHTML=card.innerHTML+`  <div data-folder="${folder2}" class="a1">
                <img class="but" src="img/but.svg" alt="">
                <img src="/songs/${folder2}/cover.jpeg" alt="">
                <h5>${response2.title}</h5>
                <p>${response2.description}</p>
            </div>`
       }
  }
  Array.from(document.getElementsByClassName("a1")).forEach(e=>{
    e.addEventListener("click",async item=>{
     
     if (item.currentTarget.dataset.folder) {
       try {
        songs = [];//to cleare songs
         await getsongs(item.currentTarget.dataset.folder);
        //to cleare ul
         //  let ul = document.querySelector(".playlist").getElementsByTagName("ul")[0];
        //  if (!ul) {
        //    console.error("No <ul> found inside .playlist");
        //    return;
        //  } 
        //  // Clear existing <li> items
        //  while (ul.firstChild) {
        //    ul.removeChild(ul.firstChild);
        //    console.log("l")
        //  }
  
         addli();
         playnow(`${songs[0]}`);
       } catch (error) {
         console.error("Error fetching songs:", error);
       }
     }
   
    })
   })
  
  

}
function playnow(songName, pause=false){

  //j Ki Raat - Stree 2 is the song name from the movie Stree 2.
  //  The %20 is a URL-encoded space character. In URLs, spaces are often replaced with %20.
  current.src = `songs/${decodeURI(songName)}.mp3`;//again here also because of space problrm created
  
  current.volume=0.5;
  
  if(!pause){
    current.play();
    play.src="img/play.svg";
    
  }
  
  document.querySelector(".duration").innerHTML="00:00/00:00";
  let l=`${songName}`.indexOf("/");//here /ncs come so to reove ncs/ get index of / and remove it
  
  let k=`${songName}`.substring(l+1);
  document.querySelector(".songnn").innerHTML=decodeURI(k);//use decode otherwise 20%20 will come
  
  
  //or this
  //  if(audio){//if we not do this then for eatch audio new instance is creatted and then they all are fired together
  //   audio.pause();
  //   audio.currentTime = 0; 
  //  }
  // //  let k=`songs/ ${songName} .mp3`;
  // //  console.log(k);//***********this linr imporatant songs was not play just because of the space no give */
  // //  console.log("\nsongs\ Aaj Ki Raat - Stree 2 .mp3");
  // audio=new Audio(`songs/${songName} .mp3`);
  // audio.play();
  }


function addli(){
  let k1=null;
  let k3=null;
let arr=['a','b','c','d','e','f','g','h','i','j','z','x','y','a','b','c','d','e','f','g','h','i','j','x','y','z']
  let i=0;
let songUL=document.querySelector(".playlist").getElementsByTagName("ul")[0];
//if allredy sons are present then cut them add new songs for that songs=0
songUL.innerHTML="";
for(let song of songs){//song is declare with const we can not chaange its value make it let
     
  let k=song.split("/").pop();
    k3=song.split("/")[0];
  
  if (i >= arr.length) {
    break; // Exit if there are no more images
}
  songUL.innerHTML =songUL.innerHTML+`
  <li>
                    <img class="honny" src="/img/${arr[i]}.jpeg" alt="">
                    <div class="info">
                        <div class="over">${k.replaceAll("%20"," ")}</div>
                    </div> 
                 <div class="playnow">
                    <div>Play now </div>  
                    <img class="list" src="img/pause.svg" alt="">
                </div>
            </li>
  
   `;//use replace all other wise it will replcw only first elemnt
i++;
  }
songUL.classList.add('invert');
songUL.style.listStyle = 'none';
Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e => {
  e.addEventListener("click",element=>{
    // You used list.src = "img/play.svg"; and list.src = "img/pause.svg";, but list wasn't defined or initialized in your code. This would result in list being undefined, so trying to change its src attribute wouldn't work.
  //list is not difind in html  so error come  and also the we are not assgn li related to it
  let playIcon = e.querySelector(".list");
  if (currentSongElement === e || currentSongElement ==null ) {
 
    if(current.paused){
      k1=k3;
      playIcon.src = "img/play.svg";
      play.src="img/play.svg";
  
     k1=k1+"/"+(e.getElementsByTagName("div")[0].firstElementChild.innerHTML).trim();
      playnow(k1);        
      console.log(current.src);
    }
    else{
      playIcon.src = "img/pause.svg";
      play.src="img/pause.svg";
      current.pause();
    }
  } else {  
      k1=k3;
      let prevPlayIcon = currentSongElement.querySelector(".list");
      prevPlayIcon.src = "img/pause.svg";  // Change the previous song icon to pause
     currentAudio.pause();   // Pause the previous song
  
    playIcon.src = "img/play.svg";  // Change the new song icon to play
    k1=k1+"/"+(e.getElementsByTagName("div")[0].firstElementChild.innerHTML).trim();
    playnow(k1);         
  }
  currentSongElement = e;
  currentAudio = current; 
  //when we give song to play noe new instance is made or when we cliked on li so to keep the track f previous one use currentsongelement
  });

});
}


async function  getsongs(folder) {
  // console.log(folder);
    let a=await fetch(`http://127.0.0.1:3000/songs/${folder}`)
   
    let response=await a.text();//when we fetch songs from local host its give in tabled form
  
    let div=document.createElement("div");
    div.innerHTML=response;
  let as= div.getElementsByTagName("a");

   for(let index=0;index<as.length;index++){
      const element=as[index];//get all a tag
      if(element.href.endsWith(".mp3")){//geting href of all a tag ends with .mp3
      let k= element.href.split(`/${folder}/`)[1];//split on the basiss of /songs/ and take the last part
    let m=  k.split(".mp3")[0];
   
    m=`${folder}/`+m;
    // console.log(m);//add ncs/ like folder name
      songs.push(m); //this is to remove .mp3 
        //hare we not use backend thats why we use this other wise we take songs from servers and api 
      // songs[i]=`${folder}`+songs[i];
      }
   }

}

async  function main(){
getalbum();
await getsongs("ncs");

playnow(`${songs[0]}`, true);
addli();
// Use Case: It's the element that is currently handling the event (the element to which you added the event listener).
// Use Case: It's the element on which the event was originally dispatched (clicked, hovered, etc.), regardless of whether it has an event listener attached to it.

 

// add event listner to eatch song
// Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e => {
//   e.addEventListener("click",element=>{
//         playnow((e.getElementsByTagName("div")[0].firstElementChild.innerHTML).trim());        
//   })

// });

//bug if new playlist then the curent song not stop

play.addEventListener("click", element=>{
  let songName1 = current.src.split("songs/").pop().split(".mp3")[0]; 
  // console.log(songName1);
  let index = songs.indexOf(songName1);
  let im=(document.querySelector(".playlist").firstElementChild.children[index].querySelector(".playnow .list"));

  if(current.paused){
    play.src="img/play.svg";
   
      im.src="img/play.svg"; 
   
    current.play();
  }
  else{
    play.src="img/pause.svg";
    im.src="img/pause.svg";
    current.pause();
  }
})

let cutime=null;

current.addEventListener('loadedmetadata', function() {
  seek_bar.max = current.duration; // Set the max value of the seek bar to the audio duration
  volum.value=50;
});//this more bennfitial as timeupdate change contineously

//add an event listner to get the ontime update
current.addEventListener("timeupdate",r=>{
  let tduration=current.duration;
   cutime=current.currentTime;
  seek_bar.value = current.currentTime;//(if not use this then thumb will not move contineously on track) // Update the seek bar to reflect current playback position
  document.querySelector(".duration").innerHTML= `${convertSecondsToMinutes(cutime)}/${convertSecondsToMinutes(tduration)}`;
  checkCurrentTime();
})

function checkCurrentTime() {
  if (cutime >= seek_bar.max) {
      next.click(); // Click the next button automatically
  }
}
// or this will also use instead of seek_bar.addEventListener('input',e=>{
// add event listner to the seek bar to move but in is not effitiant as the clik occured then only it will move by calculatin value so use input event bellow is given
// seek_bar.addEventListener("click",e=>{
//   // console.log(e)//give info x ,y on scren mouse click or keypreed
//   let widthseek=e.target.getBoundingClientRect().width;
//   let clickx=e.offsetX;
//   // let k=(clickx/widthseek)*100;
//   let k = (clickx / widthseek) * seek_bar.max; // Use max instead of 100
//   seek_bar.value =k;
// })


// Set up the seek bar to control playback
seek_bar.addEventListener('input',e=>{
  current.currentTime = seek_bar.value;// Update audio playback time when the seek bar is adjusted
  // not done track color change
  // const value = seek_bar.value;
  // const max = seek_bar.max;
  // // Calculate the percentage of the thumb position
  // const percentage = (value / max) * 100;
  // // Change the background of the seek bar with a linear gradient
  // seek_bar.style.background = `linear-gradient(to right, #4CAF50 ${percentage}%, #ddd ${percentage}%)`;
})

// addEventListener to hamburger
document.querySelector(".hamburger").addEventListener("click",e=>{
  document.querySelector(".left").style.left = "0%";
})
nd0.addEventListener("click",e=>{
  document.querySelector(".left").style.left = "-130%";
})

//add event listener to previous and next
back.addEventListener("click",e=>{
  // curentsong.src.split("/").slice(-1)[0]
  console.log(current.src)
  // -1 means it starts counting from the end of the array, so slice(-1) will return an array containing only the last element.
    //  console.log(songs) ;//it comes with encoded urij Ki Raat - Stree 2 is the song name from the movie Stree 2.
// The %20 is a URL-encoded space character. In URLs, spaces are often replaced with %20.
// 1_Aaj%20Ki%20Raat%20-%20Stree%202
// dont use  decodeURI(ins song as it is 1_Aaj%20Ki%20Raat%20-%20Stree%202 is present)

// let index=songs.indexOf((current.src.split("/").slice(-1)).split(".mp3")[0]);//[0]  to get first element as the slice return array (and again apply split as we not show mp3 in li list)
let songName1 = current.src.split("songs/").pop().split(".mp3")[0]; 
// console.log(songName1);
let index = songs.indexOf(songName1);
let im=(document.querySelector(".playlist").firstElementChild.children[index].querySelector(".playnow .list"));
if(current.paused){
  im.src="img/play.svg";
}
else{
  im.src="img/pause.svg";
}
if((index-1)<0){
  im.src="img/play.svg";
}
// console.log(current.src)
if((index-1)>=0){

playnow(songs[index-1]);
let im=(document.querySelector(".playlist").firstElementChild.children[index-1].querySelector(".playnow .list"));
// if(current.paused){
  im.src="img/play.svg";
// }
// else{
  // im.src="img/pause.svg";
// }
}
})

next.addEventListener("click",e=>{
// let index=songs.indexOf((current.src.split("/").slice(-1)[0]).split(".mp3")[0]);//[0]  to get first element as the slice return array (and again apply split as we not show mp3 in li list)
let songName1 = current.src.split("songs/").pop().split(".mp3")[0]; 
// console.log(songName1);
let index = songs.indexOf(songName1);
let im=(document.querySelector(".playlist").firstElementChild.children[index].querySelector(".playnow .list"));
if(current.paused){
  im.src="img/play.svg";
}
else{
  im.src="img/pause.svg";
}

// console.log(current.src)
if((index+1)>=songs.length){
  im.src="img/play.svg";
}
if((index+1)<songs.length){
playnow(songs[index+1]);
let im=(document.querySelector(".playlist").firstElementChild.children[index+1].querySelector(".playnow .list"));
// if(current.paused){
  im.src="img/play.svg";
// }
// else{
  // im.src="img/pause.svg";
// }
}
})


//add event listner to volum
// "input": It's ideal for real-time updates. For example, if you want to adjust the volume in real-time as the user drags the slider, the input event is perfect because it allows for instant feedback.
// Dragging refers to the action where the user clicks on the slider thumb (the circular handle on the slider), holds it, and moves it left or right to adjust the value.

volum.addEventListener("input",e=>{
  
 current.volume=volum.value/100;
 k.src="img/volume.svg";
})
// let k=document.querySelector(".track").document.querySelector(".stop");//wrong
let k = document.querySelector(".track .stop"); // Finds .stop within .track
k.addEventListener("click",e=>{
  if (k.src.includes("img/volumoff.svg")) {
    k.src = "img/volume.svg"; // Change to another image
    current.volume=0.3;
    volum.value=30;
} else {
    k.src = "img/volumoff.svg"; // Change to volume off image
    current.volume=0;
    volum.value=0;
  }

})
// document.querySelector("#volum").style.display = "none";
// document.querySelector(".stop").addEventListener("mouseenter", function() {
//   document.querySelector("#volum").style.display = "block";
// });

// document.querySelector(".stop").addEventListener("mouseleave", function() {
//   document.querySelector("#volum").style.display = "none";
// });


}




main(); 