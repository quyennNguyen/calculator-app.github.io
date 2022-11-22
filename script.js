// algebra calculator
const numberBtns = document.querySelectorAll(`[data-number]`);
const operatorBtns = document.querySelectorAll(`[data-operator]`);
const equalBtn = document.querySelector(`[data-equal]`);
const acBtn = document.querySelector(`[data-allclear]`);
const delBtn = document.querySelector(`[data-delete]`);
const output = document.querySelector(`[data-result]`);
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
    if (this.currentOperandTextElement == "" && this.previousOperandTextElement == "") {
      return;
    }
    if (this.currentOperandTextElement == "" && this.previousOperandTextElement != "") {
      this.operation = operator;
      this.previousOperandTextElement = this.previousOperandTextElement.slice(0, -1) + operator;
    }
    if (this.currentOperandTextElement != "" && this.previousOperandTextElement != "") {
      this.calculate();
    }
    if (this.currentOperandTextElement != "" && this.previousOperandTextElement == "") {
      this.operation = operator;
      this.previousOperandTextElement = this.currentOperandTextElement + " " + operator;
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
    switch(this.operation) {
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
    this.currentOperandTextElement = this.currentOperandTextElement.slice(0, -1);
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

numberBtns.forEach(btn => {
  btn.onclick = () => {
    calculator.appendNumber(btn.innerText);
  }
});

operatorBtns.forEach(btn => {
  btn.onclick = () => {
    calculator.chooseOperation(btn.innerText);
  }
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

  totalOutput1.innerText = `$${total1.toFixed(2)}`;
  totalOutput2.innerText = `$${total2.toFixed(2)}`;
  totalOutput3.innerText = `$${total3.toFixed(2)}`;

  // totalOutput1.innerText = `$${total1.toLocaleString("en-US")}`;
  // totalOutput2.innerText = `$${total2.toLocaleString("en-US")}`;
  // totalOutput3.innerText = `$${total3.toLocaleString("en-US")}`;
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

const reset = () => {
  totalInput.value = 0;
  taxInput.value = 0;
  tipInput.value = 0;
  peopleInput.innerText = 1;
  totalOutput1.innerText = `$0.00`;
  totalOutput2.innerText = `$0.00`;
  totalOutput3.innerText = `$0.00`;
};