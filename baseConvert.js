const inputNum = document.getElementById("input-base-num");
const inputBase = document.getElementById("input-base");
const outputNum = document.getElementById("output-base-num");
const outputBase = document.getElementById("output-base");

const binary = ["0", "1", "-", "."];
const octal = ["0", "1", "2", "3", "4", "5", "6", "7", "-", "."];
const decimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "."];
const duodecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "-", "."];
const hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "-", "."];
const duotrigesimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "-", "."];
const hexatrigesimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "."];

const convertBase = () => {
  let input = inputNum.value.toLowerCase();
  let base1 = Number(inputBase.value);

  if (!isInGivenBase(input, base1)) {
    inputNum.value = "input and radix do not match";
    return;
  }

  // convert initial base to base 10
  if (base1 == 10) {
    input = Number(input);
  } else {
    // input = parseInt(input, base1);
    // how to take input with decimal point from a non-10 base; ex, 123abc.456
  }

  let base2 = Number(outputBase.value);
  let output = 0;

  // from base 10, convert it to final base
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
      result = validateDigit(number, binary);
      break;
    case 8:
      result = validateDigit(number, octal);
      break;
    case 10:
      result = validateDigit(number, decimal);
      break;
    case 12:
      result = validateDigit(number, duodecimal);
      break;
    case 16:
      result = validateDigit(number, hexadecimal);
      break;
    case 32:
      result = validateDigit(number, duotrigesimal);
      break;
    case 36:
      result = validateDigit(number, hexatrigesimal);
      break;
    default:
      return;
  }

  return result;
};

const validateDigit = (number, arr) => {
  for (let i of number) {
    if (!arr.includes(i)) {
      return false;
    }
  }
  return true;
};


// if (!isAValidDecimal(input)) {
//   inputNum.value = "invalid input";
//   return;
// }

// const isAValidDecimal = (number) => {
//   let result = true;
//   let firstPoint = number.indexOf(".");
//   let lastPoint = number.lastIndexOf(".");

//   if (firstPoint != lastPoint) {
//     result = false;
//   }

//   return result;
// };