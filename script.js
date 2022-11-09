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