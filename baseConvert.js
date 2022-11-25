const inputNum = document.getElementById("input-base-num");
const inputBase = document.getElementById("input-base");
const outputNum = document.getElementById("output-base-num");
const outputBase = document.getElementById("output-base");

const binary = ["0", "1", "-", "."];
const octal = ["0", "1", "2", "3", "4", "5", "6", "7", "-", "."];
const decimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "."];
const duodecimal = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "-",
  ".",
];
const hexadecimal = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "-",
  ".",
];
const duotrigesimal = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "-",
  ".",
];
const hexatrigesimal = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "-",
  ".",
];

const convertBase = () => {
  let input = inputNum.value.toLowerCase();
  let base1 = Number(inputBase.value);

  if (!isAValidDecimal(input)) {
    inputNum.value = "invalid input";
    outputNum.value = 0;
    return;
  }

  if (!isInGivenBase(input, base1)) {
    inputNum.value = "invalid input or input and radix do not match";
    outputNum.value = 0;
    return;
  }

  if (base1 == 10) {
    input = Number(input);
  } else {
    let pointIndex = input.indexOf(".");

    if ( pointIndex == -1) {
      input = parseInt(input, base1);
    } else {
      input = convertFraction(input, base1, pointIndex);
    }
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

const isAValidDecimal = (number) => {
  let result = true;

  let firstHyphen = number.indexOf("-");
  let lastHyphen = number.lastIndexOf("-");

  if (firstHyphen != -1) {
    if (firstHyphen != 0 || firstHyphen != lastHyphen) {
      result = false;
    }
  }

  let firstPoint = number.indexOf(".");
  let lastPoint = number.lastIndexOf(".");

  if (firstPoint != lastPoint) {
    result = false;
  }

  return result;
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

const convertFraction = (number, base, point) => {
  let result = 0;

  let wholeNumberPart = parseInt(number, base);
  let fractionPart = 0;
  let str = number.slice(point + 1);

  for (let i in str) {
    fractionPart += Number(str[i]) / Math.pow(base, i + 1);
  }

  if (wholeNumberPart < 0) {
    result = wholeNumberPart - fractionPart;
  } else {
    result = wholeNumberPart + fractionPart;
  }

  return result;
};