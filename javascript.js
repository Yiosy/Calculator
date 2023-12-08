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
numbers.forEach((x, i) =>
  x.addEventListener("click", () => (input.value = `${input.value}${i + 1}`))
);

clearButton.addEventListener("click", () => (input.value = ""));
