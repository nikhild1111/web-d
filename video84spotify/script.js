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
async function  getsongs() {
    let a=await fetch("http://127.0.0.1:3000/songs/")
    let response=await a.text();//when we fetch songs from local host its give in tabled form
  
    let div=document.createElement("div");
    div.innerHTML=response;
  let as= div.getElementsByTagName("a");

   for(let index=0;index<as.length;index++){
      const element=as[index];//get all a tag
      if(element.href.endsWith(".mp3")){//geting href of all a tag ends with .mp3
      let k= element.href.split("/songs/")[1];//split on the basiss of /songs/ and take the last part
      
    //  console.log(k);
      songs.push(k.split(".mp3")[0]); //this is to remove .mp3 
        //hare we not use backend thats why we use this other wise we takesongs from servers and api 
      }
   }

}
function playnow(songName, pause=false){
//  console.log(songName);j Ki Raat - Stree 2 is the song name from the movie Stree 2.
//  The %20 is a URL-encoded space character. In URLs, spaces are often replaced with %20.
current.src = `songs/${decodeURI(songName)}.mp3`;//again here also because of space problrm created
current.volume=0.5;
console.log(current.volume);
if(!pause){
  current.play();
  play.src="img/play.svg";
  
}

document.querySelector(".duration").innerHTML="00:00/00:00";
document.querySelector(".songnn").innerHTML=decodeURI(songName);


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
async  function main(){

await getsongs();
playnow(songs[0], true);

let songUL=document.querySelector(".playlist").getElementsByTagName("ul")[0];
for(const song of songs){
  songUL.innerHTML =songUL.innerHTML+`
  <li>
                    <img class="honny" src="/img/honny.jpeg" alt="">
                    <div class="info">
                        <div class="over">${song.replaceAll("%20"," ")}</div>
                    </div> 
                 <div class="playnow">
                    <div>Play now </div>  
                    <img id="list" src="img/pause.svg" alt="">
                </div>
            </li>
  
   `;//use replace all other wise it will replcw only first elemnt
}
songUL.classList.add('invert');
songUL.style.listStyle = 'none'; 

// add event listner to eatch song
// Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e => {
//   e.addEventListener("click",element=>{
//         playnow((e.getElementsByTagName("div")[0].firstElementChild.innerHTML).trim());        
//   })

// });

Array.from(document.querySelector(".playlist").getElementsByTagName("li")).forEach(e => {
  e.addEventListener("click",element=>{
    if(current.paused){
      list.src="img/play.svg";
      playnow((e.getElementsByTagName("div")[0].firstElementChild.innerHTML).trim());        
    }
    else{
      list.src="img/pause.svg";
      current.pause();
    }
       
  })

});

play.addEventListener("click", element=>{
  console.log(current.paused)

  if(current.paused){
    play.src="img/play.svg";
  
    current.play();
  }
  else{
    play.src="img/pause.svg";
    current.pause();
  }
})


current.addEventListener('loadedmetadata', function() {
  seek_bar.max = current.duration; // Set the max value of the seek bar to the audio duration
  volum.value=50;
});//this more bennfitial as timeupdate change contineously

//add an event listner to get the ontime update
current.addEventListener("timeupdate",r=>{
  let tduration=current.duration;
  let cutime=current.currentTime;
  seek_bar.value = current.currentTime;//(if not use this then thumb will not move contineously on track) // Update the seek bar to reflect current playback position
  document.querySelector(".duration").innerHTML= `${convertSecondsToMinutes(cutime)}/${convertSecondsToMinutes(tduration)}`;
})


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

  // -1 means it starts counting from the end of the array, so slice(-1) will return an array containing only the last element.
    //  console.log(songs) ;//it comes with encoded urij Ki Raat - Stree 2 is the song name from the movie Stree 2.
// The %20 is a URL-encoded space character. In URLs, spaces are often replaced with %20.
// 1_Aaj%20Ki%20Raat%20-%20Stree%202
// dont use  decodeURI(ins song as it is 1_Aaj%20Ki%20Raat%20-%20Stree%202 is present)
let index=songs.indexOf((current.src.split("/").slice(-1)[0]).split(".mp3")[0]);//[0]  to get first element as the slice return array (and again apply split as we not show mp3 in li list)
console.log(index)
if((index-1)>=0){
playnow(songs[index-1]);
}
})

next.addEventListener("click",e=>{
let index=songs.indexOf((current.src.split("/").slice(-1)[0]).split(".mp3")[0]);//[0]  to get first element as the slice return array (and again apply split as we not show mp3 in li list)
if((index+1)<songs.length){
playnow(songs[index+1]);
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
    current.volume=volum.value/100;
} else {
    k.src = "img/volumoff.svg"; // Change to volume off image
    current.volume=0;
    volum.value=0;
  }

})

}




main();