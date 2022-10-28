// color list
let color1 = "#3d405b";
let color2 = "#f2cc8f";
let color3 = "#f4f1de";

// receipt
const receiptIcon = document.getElementById("receipt-icon");
let x = "";

for (let i = 0; i < 10; i++) {
    x += `<i class="fa-regular fa-lemon"></i>`;
}

receiptIcon.innerHTML = x;

// calculator list
const calType = document.getElementById("calculator-list").querySelectorAll(".calculator-type");

for (let i in calType) {
    if (Number(i) % 2 == 0) {
        calType[i].style.background = color2;
    } else {
        calType[i].style.background = color3;
    }
}

if (typeof window !== 'undefined') {
    console.log('You are on the browser')
  } else {
    console.log('You are on the server')
  }

