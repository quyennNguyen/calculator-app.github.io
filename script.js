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
    let subtotal = Number(totalInput.value);
    let tax = subtotal * (Number(taxInput.value)/100);
    let total1 = subtotal + tax;
    let tip = total1 * (Number(tipInput.value)/100);
    let total2 = total1 + tip;
    let total3 = total2 / numOfPeople;

    totalOutput1.innerText = `$${total1.toFixed(2)}`;
    totalOutput2.innerText = `$${total2.toFixed(2)}`;
    totalOutput3.innerText = `$${total3.toFixed(2)}`;

    // totalOutput1.innerText = `$${total1.toLocaleString("en-US")}`;
    // totalOutput2.innerText = `$${total2.toLocaleString("en-US")}`;
    // totalOutput3.innerText = `$${total3.toLocaleString("en-US")}`;
};

const increasePeople = () => {
    numOfPeople++;
    peopleInput.innerText = numOfPeople;
    calculateBill();
};

const decreasePeople = () => {
    if (numOfPeople > 1) {
        numOfPeople--;
        peopleInput.innerText = numOfPeople;
        calculateBill();
    } else {
        return;
    }
};

// calculator list
let color1 = "#3d405b";
let color2 = "#f2cc8f";
let color3 = "#f4f1de";
const calType = document.querySelectorAll(".calculator-type");

for (let i in calType) {
  if (Number(i) % 2 == 0) {
    calType[i].style.background = color3;
  } else {
    calType[i].style.background = color2;
  }
}