// algebra calculator
const numberBtns = document.querySelectorAll(`[data-number]`);
const operatorBtns = document.querySelectorAll(`[data-operator]`);
const equalBtn = document.querySelector(`[data-equal]`);
const acBtn = document.querySelector(`[data-allclear]`);
const delBtn = document.querySelector(`[data-delete]`);
const output = document.querySelector(`[data-output]`);
const previousOperand = document.querySelector("#previous-operand");
const currentOperand = document.querySelector("#current-operand");

class Calculator {
  constructor(previousOperand, currentOperand) {
    this.previousOperand = previousOperand;
    this.currentOperand = currentOperand;
    this.clear();
  }

  appendNumber(number) {
    if (number == "." && this.currentOperandTextElement.includes(".")) {
      return;
    }

    this.currentOperandTextElement += number;
    this.updateDisplay();
  }

  chooseOperation(operator) {
    if (
      this.currentOperandTextElement == "" &&
      this.previousOperandTextElement == ""
    ) {
      return;
    }

    if (
      this.currentOperandTextElement == "" &&
      this.previousOperandTextElement != ""
    ) {
      this.operation = operator;
      this.previousOperandTextElement =
        this.previousOperandTextElement.slice(0, -1) + operator;
    }

    if (
      this.currentOperandTextElement != "" &&
      this.previousOperandTextElement != ""
    ) {
      this.calculate();
    }

    if (
      this.currentOperandTextElement != "" &&
      this.previousOperandTextElement == ""
    ) {
      this.operation = operator;
      this.previousOperandTextElement =
        this.currentOperandTextElement + " " + operator;
      this.currentOperandTextElement = "";
    }

    this.updateDisplay();
  }

  calculate() {
    let x = this.previousOperandTextElement.slice(0, -2);
    let y = this.currentOperandTextElement;

    if (x == "" || y == "") {
      return;
    }

    x = Number(x);
    y = Number(y);

    switch (this.operation) {
      case "+":
        this.currentOperandTextElement = String(x + y);
        break;
      case "-":
        this.currentOperandTextElement = String(x - y);
        break;
      case "*":
        this.currentOperandTextElement = String(x * y);
        break;
      case "/":
        this.currentOperandTextElement = String(x / y);
        break;
      default:
        return;
    }

    this.previousOperandTextElement = "";
    this.updateDisplay();
  }

  delete() {
    this.currentOperandTextElement = this.currentOperandTextElement.slice(
      0,
      -1
    );
    this.updateDisplay();
  }

  clear() {
    this.previousOperandTextElement = "";
    this.currentOperandTextElement = "";
    this.operation = undefined;
    this.updateDisplay();
  }

  updateDisplay() {
    this.previousOperand.innerText = this.previousOperandTextElement;
    this.currentOperand.innerText = this.currentOperandTextElement;
  }
}

const calculator = new Calculator(previousOperand, currentOperand);

numberBtns.forEach((btn) => {
  btn.onclick = () => {
    calculator.appendNumber(btn.innerText);
  };
});

operatorBtns.forEach((btn) => {
  btn.onclick = () => {
    calculator.chooseOperation(btn.innerText);
  };
});

equalBtn.onclick = () => {
  calculator.calculate();
};

acBtn.onclick = () => {
  calculator.clear();
};

delBtn.onclick = () => {
  calculator.delete();
};

// bases conversion
const inputNum = document.getElementById("input-num");
const inputBase = document.getElementById("input-base");
const outputNum = document.getElementById("output-num");
const outputBase = document.getElementById("output-base");

const binary = ["0", "1", "-", "."];
const octal = ["0", "1", "2", "3", "4", "5", "6", "7", "-", "."];
const decimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "."];
const duodecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "-", "."];
const hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "-", "."];
const duotrigesimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "-", "."];
const hexatrigesimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "."];

const convertBase = () => {
  let input = inputNum.value;
  let base1 = Number(inputBase.value);

  if (isInGivenBase(input, base1) == false) {
    inputNum.value = "invalid input";
    return;
  }

  // how to convert float number with decimal point from a non-10 base?
  // how to prevent multiple input of "."

  if (base1 == 10) {
    input = Number(input);
  } else {
    input = parseInt(input, base1);
  }

  let base2 = Number(outputBase.value);
  let output = 0;

  if (base2 == 10) {
    output = input;
  } else {
    output = input.toString(base2);
  }

  outputNum.value = output;
};

const isInGivenBase = (number, base) => {
  let result = true;

  switch (base) {
    case 2:
      result = loopBase(number, binary);
      break;
    case 8:
      result = loopBase(number, octal);
      break;
    case 10:
      result = loopBase(number, decimal);
      break;
    case 12:
      result = loopBase(number, duodecimal);
      break;
    case 16:
      result = loopBase(number, hexadecimal);
      break;
    case 32:
      result = loopBase(number, duotrigesimal);
      break;
    case 36:
      result = loopBase(number, hexatrigesimal);
      break;
    default:
      return;
  }

  return result;
};

const loopBase = (number, array) => {
  for (let i of number) {
    if (!array.includes(i)) {
      return false;
    }
  }
  return true;
};

// tip calculator
const totalInput = document.getElementById("total-input");
const taxInput = document.getElementById("tax-input");
const tipInput = document.getElementById("tip-input");

const peopleInput = document.getElementById("people-input");
let numOfPeople = Number(peopleInput.innerText);

const totalOutput1 = document.getElementById("total1-output");
const totalOutput2 = document.getElementById("total2-output");
const totalOutput3 = document.getElementById("total3-output");

const calculateBill = () => {
  let input1 = Number(totalInput.value);
  let input2 = Number(taxInput.value);
  let input3 = Number(tipInput.value);

  let subtotal;
  let tax;
  let tip;

  if (input1 >= 0) {
    subtotal = input1;
  }

  if (input2 >= 0) {
    tax = (subtotal * input2) / 100;
  }

  let total1 = subtotal + tax;

  if (input3 >= 0) {
    tip = (total1 * input3) / 100;
  }

  let total2 = total1 + tip;
  let total3 = total2 / numOfPeople;

  displayBill(total1, total2, total3);
};

const increase = () => {
  numOfPeople++;
  peopleInput.innerText = numOfPeople;
  calculateBill();
};

const decrease = () => {
  if (numOfPeople > 1) {
    numOfPeople--;
    peopleInput.innerText = numOfPeople;
    calculateBill();
  }
};

const displayBill = (total1, total2, total3) => {
  if (isNaN(total1)) {
    totalOutput1.innerText = `invalid input`;
  } else {
    totalOutput1.innerText = `$${total1.toFixed(2)}`;
  }

  if (isNaN(total2)) {
    totalOutput2.innerText = `invalid input`;
  } else {
    totalOutput2.innerText = `$${total2.toFixed(2)}`;
  }

  if (isNaN(total3)) {
    totalOutput3.innerText = `invalid input`;
  } else {
    totalOutput3.innerText = `$${total3.toFixed(2)}`;
  }
  
  // totalOutput1.innerText = `$${total1.toLocaleString("en-US")}`;
  // totalOutput2.innerText = `$${total2.toLocaleString("en-US")}`;
  // totalOutput3.innerText = `$${total3.toLocaleString("en-US")}`;
}

const reset = () => {
  totalInput.value = 0;
  taxInput.value = 0;
  tipInput.value = 0;
  peopleInput.innerText = 1;
  totalOutput1.innerText = `$0.00`;
  totalOutput2.innerText = `$0.00`;
  totalOutput3.innerText = `$0.00`;
};
