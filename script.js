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
let num = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.className === "number") {
      if (num2) {
        num = "";
        num1 = undefined;
        num2 = undefined;
      }
      if (button.id === "." && num.includes(".")) {
        return;
      }
      num += button.id;
      answer.textContent = num;
    } else if (button.className === "operator") {
      // Operator is input first
      if (!num && !num1) {
        num1 = "0";
        // One operand
      } else if (num1 === undefined) {
        num1 = num;
      } else {
        // Divide by 0
        if (num === "0" && operator === "/") {
          answer.textContent = "no";
          num = "";
          num1 = undefined;
          operator = undefined;
          calculations.textContent = "";
          return;
        } else if (button.id === "=") {
          calculations.textContent = `${num1} ${operator} ${num} =`;
          num2 = operate(num1, num, operator);
          if (num2.toString().length > 15) {
            answer.textContent = trimAnswer(num2);
          } else {
            answer.textContent = num2;
          }
          return;
          // Two operands and operator is selected
        } else if (num && num1 && operator) {
          num2 = operate(num1, num, operator);
          if (num2.toString().length > 15) {
            answer.textContent = num1 = trimAnswer(num2);
          } else {
            answer.textContent = num1 = num2;
          }
        }
      }
      operator = button.id;
      calculations.textContent = `${num1} ${operator}`;
      num = "";
      num2 = undefined;
    } else if (button.className === "backspace") {
      if (num === "") {
        return;
      } else {
        answer.textContent = num = answer.textContent.slice(0, -1);
      }
    } else {
      location.reload();
    }
  });
});

// Trim all the 0s from the end of this floating point answer because coding is dumb and calculates decimals stupidlly
function trimAnswer(num2) {
  return num2.toString().substring(0, 15).replace(/0+$/, "").trimEnd();
}
