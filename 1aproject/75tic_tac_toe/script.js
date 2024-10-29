//coolrs for ganrating a color
let boxes = document.querySelectorAll(".box");
let hide = document.querySelector(".m");
let new4 = document.querySelector(".reset");
let rese = document.querySelector(".reset2");
let ms = document.querySelector(".m").firstElementChild;
// console.log(new4);
// console.log(rese);
let turno = true;
let count = 0;
const checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern);//here patteran it self is an array so when we use pattern[0] so it return value present at its 0 index
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    // console.log(boxes);

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const reset2 = () => {
  turno = true;
  count = 0;
  enablebox();
  hide.classList.add("k");
  document.body.firstElementChild.removeAttribute("Style","height: 600px;  display: flex; flex-direction: column; text-align: center;  justify-content: center;   align-items: center;   justify-items: center;   gap: 75px;")

};
const reset = () => {
  turno = true;
  count = 0;
  enablebox();
  hide.classList.add("k");
  document.body.firstElementChild.removeAttribute("Style","height: 600px;  display: flex; flex-direction: column; text-align: center;  justify-content: center;   align-items: center;   justify-items: center;   gap: 75px;")
};
let enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;//if this was false then it will change or not
//     If box.disabled is true (the box is disabled), setting box.disabled = false will enable the box.
// If box.disabled is already false (the box is enabled), setting box.disabled = false will keep it enabled.
// So, box.disabled = false; always results in the box being enabled, regardless of its previous state.
    box.style.backgroundColor = "white";
    box.innerHTML = "";
  }
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerHTML = "o";
      turno = false;
      box.style.backgroundColor = "#c56e6e";
      box.style.color = "red";
    }
    else {
      box.innerHTML = "x";
      turno = true;
      box.style.backgroundColor = "#c56e6e";
      box.style.color = "black";
    }
    box.disabled = true;
    count++;

    const isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
}
);
const showWinner = (winner) => {
  ms.innerHTML = `Congratulations, Winner is <span style="font-size:45px">${winner}</span>`;//how to change vr size
  hide.classList.remove("k");
  document.body.firstElementChild.setAttribute("Style","height: 600px;  display: flex; flex-direction: column; text-align: center;  justify-content: center;   align-items: center;   justify-items: center;   gap: 75px;")

};
let gameDraw = () => {
  ms.innerText = "You Played Very Well But Match is Draw Try Again ";
  hide.classList.remove("k");
  
  document.body.firstElementChild.setAttribute("Style","height: 600px;  display: flex; flex-direction: column; text-align: center;  justify-content: center;   align-items: center;   justify-items: center;   gap: 75px;")
  disableBoxes();

}
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
rese.addEventListener("click", reset2);
new4.addEventListener("click", reset);
// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true; //playerX, playerO
// let count = 0; //To Track Draw

// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       //playerO
//       box.innerText = "O";
//       turnO = false;
//     } else {
//       //playerX
//       box.innerText = "X";
//       turnO = true;
//     }
//     box.disabled = true;
//     count++;

//     let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }
//   });
// });

// const gameDraw = () => {
//   msg.innerText = `Game was a Draw.`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };

// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };

// const showWinner = (winner) => {
//   msg.innerText = `Congratulations, Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };

// const checkWinner = () => {
//   for (let pattern of winPatterns) {
//     // console.log(pattern);
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;
//     // console.log(boxes);

//     if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//       if (pos1Val === pos2Val && pos2Val === pos3Val) {
//         showWinner(pos1Val);
//         return true;
//       }
//     }
//   }
// };
// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);