let firstNumber;
let secondNumber;
let operator;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(operator, firstArgument, secondArgument) {
  switch (operator) {
    case "+":
      return add(firstArgument, secondArgument);
      break;
    case "-":
      return subtract(firstArgument, secondArgument);
      break;
    case "*":
      return multiply(firstArgument, secondArgument);
      break;
    case "/":
      return divide(firstArgument, secondArgument);
      break;
  }
}
const input = document.querySelector("input");
const clearButton = document.querySelector(".clearButton");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const zero = document.getElementById("0");
const operatorAdd = document.getElementById("add");
const equals = document.getElementById("equals");
numbers.forEach((x, i) =>
  x.addEventListener("click", () => (input.value = `${input.value}${i + 1}`))
);

clearButton.addEventListener("click", () => (input.value = ""));
zero.addEventListener("click", () => (input.value = input.value + "0"));
operatorAdd.addEventListener("click", () => {
  if (firstNumber == null) {
    firstNumber = Number(input.value);
    operator = "+";
    input.value = "";
  } else if (typeof firstNumber == "number") {
    secondNumber = Number(input.value);
    input.value = `${firstNumber}${operator}${secondNumber}`;
  }
});
equals.addEventListener("click", () => {
  if (typeof firstNumber == "number" && typeof secondNumber == "number") {
    input.value = operate(operator, firstNumber, secondNumber);
    firstNumber = Number(input.value);
  } else if (typeof firstNumber == "number" && secondNumber == null) {
    secondNumber = Number(input.value);
    input.value = operate(operator, firstNumber, secondNumber);
  }
});
