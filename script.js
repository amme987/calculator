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

const calculations = document.querySelector(".calculations");
const answer = document.querySelector(".answer");
const buttons = document.querySelectorAll("button");
let sum,
  num = "";

// window.addEventListener("keydown", e => console.log(e));

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.className === "number") {
      if (button.id === "." && answer.textContent.includes(".")) {
        return;
      }
      num += button.id;
      answer.textContent = num;
    } else if (button.className === "operator") {
      // Operator is input first
      if (!num) {
        num1 = "0";
        // One operand
      } else if (!num1 && num1 !== 0) {
        num1 = num;
      } else {
        // Divide by 0
        if (num == 0 && operator === "/") {
          answer.textContent = "no";
          (num = ""), (num1 = ""), (operator = "");
          calculations.textContent = "";
          return;
        } else if (button.id === "=") {
          calculations.textContent = `${num1} ${operator} ${num} =`;
          sum = operate(num1, num, operator);
          if (sum.toString().length > 15) {
            answer.textContent = sum.toString().substring(0, 15);
          } else {
            answer.textContent = sum;
          }
          return;
        } else {
          sum = operate(num1, num, operator);
          if (sum.toString().length > 15) {
            answer.textContent = num1 = sum.toString().substring(0, 15);
          } else {
            answer.textContent = num1 = sum;
          }
        }
      }
      operator = button.id;
      calculations.textContent = `${num1} ${operator}`;
      (num = ""), (sum = "");
    } else if (button.className === "backspace") {
      display.textContent = num = display.textContent.slice(0, -1);
    } else {
      location.reload();
    }
  });
});

// TODO: fix error when double clicking on operand

// function calculate(value) {

// }
