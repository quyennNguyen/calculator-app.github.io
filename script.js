const calc = document.getElementsByClassName("calc");

for (let i in calc) {
    calc[i].style.background = (i % 2 == 0) ? "#dedcdc" : "transparent";
}