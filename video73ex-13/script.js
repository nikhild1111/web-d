function createCard(classn,title, cName, views, monthsOld, duration, thumbnail){
    // You're setting innerHTML and then immediately overwriting it with textContent. You should choose one method to set the content of your div.
    // You're trying to concatenate all the information into div.textContent, but it seems you want to display each piece of information separately.
 
    if (views >= 1000 && views<1000000) {
        // Divide the number by 1000 and append 'k'
        views= (views / 1000).toFixed(1) + 'k';
    }
    else if(views>=1000000){
        views= (views / 1000000).toFixed(1) + 'M';
    }
//     views = (views / 1000000).toFixed(1) + 'M';: This formats the views to '2.5M'.
// (views / 1000000): Converts 2,530,000 to 2.53.
// .toFixed(1): Rounds 2.53 to one decimal place, resulting in '2.5'.
// + 'M': Appends 'M' to '2.5', resulting in '2.5M'
 
 let card=document.createElement("div");
    card.setAttribute("class",`${classn}`);
    card.setAttribute("style",  "background-color: black;height: 180px; width:90vw;")

    document.querySelector(".container").append(card);
    let div=document.createElement("div")
  div.textContent=`${title}`
  let div2=document.createElement("div")
  let div3=document.createElement("div")
  div3.innerHTML=`${duration}`;
  div3.setAttribute("style",   " display: flex; font-size: 16px; position:relative; z-index:1; color: white; left:-78px;;top: 21px; height: 20px; width: 40px; background-color: black; border-radius: 4px; padding:2px;")
  div2.textContent=` ${cName} . ${views} views . ${monthsOld} months ago`
    // div.innerHTML=title;
  let a2=document.createElement("img")
  a2.setAttribute("src",`${thumbnail}`)
  div.setAttribute("style","color:white;  display:flex; padding: 30px 0px 20px; font-family:  sans-serif; font-size: 1.4rem;line-height: 2rem;font-wight: 500;")
  a2.setAttribute("style","  display:flex; float:left; margin:25px;  border-radius: 10px;")
  div2.setAttribute("style","color:#dbbebe; font-family: sans-serif; font-size: 1.2rem; line-height: 1.8rem; font-weight: 400; ")
    document.querySelector(`.${classn}`).append(div);
   
    document.querySelector(`.${classn}`).append(div2);
    document.querySelector(`.${classn}`).append(div3);
    document.querySelector(`.${classn}`).prepend(a2);
   
}


createCard("card","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5601300, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("my","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 30000, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("m","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 0, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("my2","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 300, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("my23","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 300, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("my22","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 300, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("my253","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 300, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("my26","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 300, 7, "31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")