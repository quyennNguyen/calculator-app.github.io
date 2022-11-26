const inputNum = document.getElementById("input-num");
const inputSystem = document.getElementById("num-system");
const outputNum = document.getElementById("output-num");

const decimalDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const romanDigits = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};

const convertNumSystem = () => {
  // let input = inputNum.value.toUpperCase();
  // let system = inputSystem.value;
  // let output = 0;

  // switch (system) {
  //   case "decimal":
  //     if (!isDecimalNumber(input)) {
  //       inputNum.value = "invalid input";
  //       outputNum.value = 2;
  //       return;
  //     }

  //     output = convertDecimalToRoman(input);
  //     break;
  //   case "roman":
  //     if (!isRomanNumeral(input)) {
  //       inputNum.value = "invalid input";
  //       outputNum.value = 2;
  //       return;
  //     }

  //     output = convertRomanToDecimal(input);
  //     break;
  //   default:
  //     break;
  // }

  outputNum.value = 2;
};

const isDecimalNumber = (number) => {
  let number = Number(number);

  if (isNaN(number) || number < 1 || number > 3999 || !Number.isInteger(number)) {
    return false;
  }

  return true;
};

const isRomanNumeral = (number) => {
  for (let i of number) {
    if (!romanDigits.includes(i)) {
      return false;
    }
  }

  return true;
};

convertDecimalToRoman = (number) => {

};

convertRomanToDecimal = (number) => {

};