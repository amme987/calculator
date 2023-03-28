let num1, num2, operator;

function add(a, b) {
  return Number(a) + Number(b);
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
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else {
    return divide(num1, num2);
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let num = "";
let sum;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.getAttribute("class") === "number") {
      num += button.getAttribute("id");
      display.textContent = num;
    } else if (button.getAttribute("class") === "operator") {
      operator = button.getAttribute("id");
      if (!num1) {
        num1 = num;
      }
      num = "";
    } else if (button.getAttribute("id") === "=") {
      num2 = num;
      display.textContent = sum = operate(num1, num2, operator);
      num1 = sum;
    }
  });
});
