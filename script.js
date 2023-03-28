let num1, num2, operator;

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

function operate(num1, num2, operator) {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "*") {
    multiply(num1, num2);
  } else {
    divide(num1, num2);
  }
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
let displayValues;
numbers.forEach(number => {
  number.addEventListener("click", () => {
    displayValues = display.textContent += `${number.getAttribute("id")}`;
  });
});