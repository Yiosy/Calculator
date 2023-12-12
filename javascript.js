let firstNumber;
let secondNumber;
let operator;
let isResult;
let divideZero;
function Clear() {
  (input.value = null),
    (operator = null),
    (firstNumber = null),
    (secondNumber = null);
  isResult = null;
}

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
  if (b === "0") {
    alert("sd");
  } else {
    return a / b;
  }
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
      input.value = " ";
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
const del = document.getElementById("del");
const dot = document.getElementById("dot");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => (input.value = input.value * -1));

function checkDot() {
  return input.value.includes(".");
}
function addDot() {
  if (checkDot() == true) {
  } else {
    input.value = input.value + ".";
  }
}
dot.addEventListener("click", () => {
  addDot();
});
function deleteInput() {
  input.value = input.value.slice(0, -1);
}
del.addEventListener("click", () => deleteInput());

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

clearButton.addEventListener("click", () => Clear());
function zeroInput() {
  if (isResult == true) {
    isResult = "false";
    input.value = null;
    secondNumber = null;
    input.value = `0`;
  } else {
    input.value = `${input.value}${0}`;
  }
}
zero.addEventListener("click", () => {
  zeroInput();
});
function operatorsCalc(operation) {
  Equals();
  Values(operation);
  zeroCheck();
  operator = operation;
}
operatorAdd.addEventListener("click", () => {
  operatorsCalc("+");
});

operatorSubstract.addEventListener("click", () => {
  operatorsCalc("-");
});

operatorMultiply.addEventListener("click", () => {
  operatorsCalc("*");
});

operatorDivide.addEventListener("click", () => {
  operatorsCalc("/");
});
function keyCheck(a, b) {
  if ((event.code === a && !event.shiftKey) || event.key === b) {
    numbersKey();
  }
}
function zeroCheck() {
  if (input.value == "Infinity" || input.value == "NaN") {
    alert("yikes");
    Clear();
  } else if (isResult == true) {
    firstNumber = Number(input.value);
  }
}
function numbersKey() {
  if (isResult == true) {
    isResult = "false";
    input.value = null;
    secondNumber = null;
    input.value = `${event.key}`;
  } else {
    input.value = `${input.value}${event.key}`;
  }
}

function Equals() {
  if (typeof firstNumber == "number" && typeof secondNumber == "number") {
    input.value = operate(operator, firstNumber, secondNumber);
    isResult = true;
  } else if (typeof firstNumber == "number" && secondNumber !== "number") {
    secondNumber = Number(input.value);
    input.value = operate(operator, firstNumber, secondNumber);
    isResult = true;
  }
}
equals.addEventListener("click", () => {
  Equals();
  zeroCheck();
});

for (let i = 0; i < 10; i++) {
  document.addEventListener("keydown", () => keyCheck(`digit${i}`, `${i}`));
}
document.addEventListener("keydown", (event) => {
  if (event.key === "=") {
    Equals();
    zeroCheck();
  } else if (event.key === "+") {
    operatorsCalc("+");
  } else if (event.key === "-") {
    operatorsCalc("-");
  } else if (event.key === "*") {
    operatorsCalc("*");
  } else if (event.key === "/") {
    operatorsCalc("/");
  } else if (event.key === "c") {
    Clear();
  } else if (event.key === "Backspace") {
    deleteInput();
  } else if (event.key === ".") {
    addDot();
  } else if (event.key === "`") {
    input.value = input.value * -1;
  }
});
