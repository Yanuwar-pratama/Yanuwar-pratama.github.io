const calculatorScreen = document.querySelector(".calculator-screen");
const screenBefore = document.querySelector(".calculator-screen-before");

const updateScreen = (currentNumber) => {
  calculatorScreen.value = currentNumber;
};

const updateScreenBefore = () => {
  if (prevNumb && calculationOperator) {
    screenBefore.value = prevNumb + calculationOperator;
  }
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    inputNumber(event.target.value);
    updateScreen(currentNumb);
    updateScreenBefore();
  });
});

let prevNumb = "";
let calculationOperator = "";
let currentNumb = "";

const inputNumber = (numb) => {
  if (currentNumb === "0") {
    currentNumb = numb;
  } else {
    currentNumb += numb;
  }
};
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (o) => {
  if (!calculationOperator) {
    prevNumb = currentNumb;
    calculationOperator = o;
    currentNumb = "";
    calculatorScreen.value += o;
  }
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  screenBefore.value = prevNumb + " " + calculationOperator + " " + currentNumb;
  calculate();
  updateScreen(currentNumb);
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumb) + parseFloat(currentNumb);
      break;
    case "-":
      result = prevNumb - currentNumb;
      break;
    case "x":
      result = prevNumb * currentNumb;
      break;
    case "/":
      result = prevNumb / currentNumb;
      break;
    default:
      break;
  }
  currentNumb = result;
  calculationOperator = "";
};

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
  prevNumb = "";
  calculationOperator = "";
  currentNumb = "0";
  screenBefore.value = "";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumb);
});

const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
  if (currentNumb.includes(".")) {
    return;
  }
  currentNumb += dot;
};

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumb);
});
