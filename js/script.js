const menuNav = document.getElementById("menu-nav");

const basicCal = document.getElementById("basic-cal");
const basicCalBtn = document.getElementById("basic-cal-btn");
const basicCalClose = document.getElementById("basic-cal-close");

const tipCal = document.getElementById("tip-cal");
const tipCalBtn = document.getElementById("tip-cal-btn");
const tipCalClose = document.getElementById("tip-cal-close");

const baseConv = document.getElementById("base-converter");
const baseConvBtn = document.getElementById("base-conv-btn");
const baseConvClose = document.getElementById("base-conv-close");

const numConv = document.getElementById("numeric-system-converter");
const numConvBtn = document.getElementById("num-conv-btn");
const numConvClose = document.getElementById("num-conv-close");

basicCalBtn.onclick = () => {
    menuNav.style.display = "none";
    basicCal.style.display = "flex";
};
basicCalClose.onclick = () => {
    menuNav.style.display = "flex";
    basicCal.style.display = "none";
};

tipCalBtn.onclick = () => {
    menuNav.style.display = "none";
    tipCal.style.display = "flex";
};
tipCalClose.onclick = () => {
    menuNav.style.display = "flex";
    tipCal.style.display = "none";
};

baseConvBtn.onclick = () => {
    menuNav.style.display = "none";
    baseConv.style.display = "flex";
};
baseConvClose.onclick = () => {
    menuNav.style.display = "flex";
    baseConv.style.display = "none";
};

numConvBtn.onclick = () => {
    menuNav.style.display = "none";
    numConv.style.display = "flex";
};
numConvClose.onclick = () => {
    menuNav.style.display = "flex";
    numConv.style.display = "none";
};
