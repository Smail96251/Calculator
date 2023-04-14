const buttons = document.querySelectorAll(".btn");
const clearButton = document.querySelector("#clearBtn");
const currentScreen = document.querySelector(".screen-current");
const screenLast = document.querySelector(".screen-last");

let firstNumber = "";
let lastNumber = "";
let sign = "";

const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const signArray = ["÷", "x", "-", "+"];

function getNumberAndSign(e) {
  if (numberArray.includes(e.target.innerText)) {
    if (sign === "" && lastNumber === "") {
      firstNumber += e.target.innerText;
      currentScreen.textContent = firstNumber;
    } else {
      lastNumber += e.target.innerText;
      currentScreen.textContent = lastNumber;
    }
  } else {
    if (signArray.includes(e.target.innerText)) {
      sign = e.target.innerText;
      screenLast.textContent = `${firstNumber} ${sign}`;
    }
  }
}

function clear() {
  firstNumber = "";
  lastNumber = "";
  sign = "";
  currentScreen.textContent = "0";
  screenLast.textContent = "";
}

buttons.forEach((button) => button.addEventListener("click", getNumberAndSign));
clearButton.addEventListener("click", clear);
