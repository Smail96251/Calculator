const buttons = document.querySelectorAll(".btn");
const clearButton = document.querySelector("#clearBtn");
const equalsBtn = document.querySelector("#equalsBtn");
const currentScreen = document.querySelector(".screen-current");
const screenLast = document.querySelector(".screen-last");

let firstNumber = "";
let lastNumber = "";
let sign = "";
let finish = false;

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
      if (finish) {
        equals();
        finish = false;
      }
      sign = e.target.innerText;
      screenLast.textContent = `${firstNumber} ${sign}`;
      finish = true;
    }
  }
}

function equals() {
  if (firstNumber === "" || sign === "" || lastNumber === "") return;
  screenLast.textContent = `${firstNumber} ${sign} ${lastNumber} =`;
  switch (sign) {
    case "÷":
      firstNumber = firstNumber / lastNumber;
      lastNumber = "";
      sign = "";
      break;
    case "x":
      firstNumber = firstNumber * lastNumber;
      lastNumber = "";
      sign = "";
      break;
    case "-":
      firstNumber = firstNumber - lastNumber;
      lastNumber = "";
      sign = "";
      break;
    case "+":
      firstNumber = +firstNumber + +lastNumber;
      lastNumber = "";
      sign = "";
      break;
  }
  firstNumber = parseInt(firstNumber * 1000) / 1000;
  currentScreen.textContent = firstNumber;
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
equalsBtn.addEventListener("click", equals);
