let firstNumber;
let secondNumber;
let operator;
let isResult = true;

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

function Values(x) {
  {
    if (firstNumber == null) {
      firstNumber = Number(input.value);
      operator = x;
      input.value = "";
    } else if (
      typeof firstNumber == "number" &&
      typeof secondNumber !== "number"
    ) {
      operator = x;
      secondNumber = Number(input.value);
      secondNumber = null;
    } else {
      operator = x;
    }
  }
}

const input = document.querySelector("input");
const clearButton = document.querySelector(".clearButton");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const zero = document.getElementById("0");
const operatorAdd = document.getElementById("add");
const operatorSubstract = document.getElementById("subtract");
const operatorMultiply = document.getElementById("multiply");
const operatorDivide = document.getElementById("divide");
const equals = document.getElementById("equals");

numbers.forEach((x, i) =>
  x.addEventListener("click", () => {
    if (isResult == true) {
      isResult = "false";
      input.value = null;
      secondNumber = null;
      input.value = `${i + 1}`;
    } else {
      input.value = `${input.value}${i + 1}`;
    }
  })
);

clearButton.addEventListener(
  "click",
  () => (
    (input.value = null),
    (operator = null),
    (firstNumber = null),
    (secondNumber = null)
  )
);

zero.addEventListener("click", () => (input.value = input.value + "0"));

operatorAdd.addEventListener("click", () => {
  Values("+");
});

operatorSubstract.addEventListener("click", () => {
  Values("-");
});

operatorMultiply.addEventListener("click", () => {
  Values("*");
});

operatorDivide.addEventListener("click", () => {
  Values("/");
});

equals.addEventListener("click", () => {
  if (typeof firstNumber == "number" && typeof secondNumber == "number") {
    input.value = operate(operator, firstNumber, secondNumber);
    firstNumber = Number(input.value);

    isResult = true;
  } else if (typeof firstNumber == "number" && secondNumber !== "number") {
    secondNumber = Number(input.value);
    input.value = operate(operator, firstNumber, secondNumber);
    firstNumber = Number(input.value);
    isResult = true;
  }
});
