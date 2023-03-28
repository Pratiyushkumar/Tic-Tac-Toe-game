const boxes = document.querySelectorAll(".box");
const userTurn = document.querySelector(".user-turn");
const result = document.querySelector(".output");
const btn = document.querySelector(".resetBtn");
const excitedImg = document.querySelector(".excitedImg");

let text = "X";
let flag = true;

userTurn.innerHTML = `${text}'s Turn`;

boxes.forEach((ele) => {
  const BoxText = ele.querySelector(".box-text");

  ele.addEventListener("click", () => {
    if (BoxText.innerText === "" && flag) {
      BoxText.innerText = text;
      const value = checkForTurn(text);
      checkWin();
      userTurn.innerHTML = `${value}'s Turn`;
      text = value;
    }
  });
});

function checkForTurn(value) {
  return value === "X" ? "O" : "X";
}

function checkWin() {
  const BoxText = document.getElementsByClassName("box-text");
  const boxCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  boxCombinations.forEach((ele) => {
    if (
      BoxText[ele[0]].innerText === BoxText[ele[1]].innerText &&
      BoxText[ele[1]].innerText === BoxText[ele[2]].innerText &&
      BoxText[ele[0]].innerText !== ""
    ) {
      result.innerText = `${text} won`;
      flag = false;
      btn.style.display = "block";
      excitedImg.style.display = "block";
    }
  });
}

btn.addEventListener("click", () => {
  ResetBtn();
});

function ResetBtn() {
  boxes.forEach((ele) => {
    const BoxText = ele.querySelector(".box-text");
    BoxText.innerText = "";
    flag = true;
    text = "X";
    userTurn.innerHTML = `${text}'s Turn`;
    result.innerText = "";
    btn.style.display = "none";
    excitedImg.style.display = "none";
  });
}
