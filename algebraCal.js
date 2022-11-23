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