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
  let base2 = Number(outputBase.value);
  let output = 0;

  if (!isAValidDecimal(input) || !isInGivenBase(input, base1)) {
    inputNum.value = "invalid input";
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
      input = convertFractionToDecimal(input, base1, pointIndex);
    }
  }

  if (base2 == 10) {
    output = input;
  } else {
    output = input.toString(base2);
  }

  outputNum.value = output;
};

const convertFractionToDecimal = (number, base, point) => {
  let result = 0;

  let wholeNumberPart = parseInt(number, base);
  let fractionPart = computeFractionPart(number.slice(point + 1), base);

  if (wholeNumberPart < 0) {
    result = wholeNumberPart - fractionPart;
  } else {
    result = wholeNumberPart + fractionPart;
  }

  return result;
};

const computeFractionPart = (number, base) => {
  let result = 0;
  let arr = [];

  switch (base) {
    case 2:
      arr = binary;
      break;
    case 8:
      arr = octal;
      break;
    case 10:
      arr = decimal;
      break;
    case 12:
      arr = duodecimal;
      break;
    case 16:
      arr = hexadecimal;
      break;
    case 32:
      arr = duotrigesimal;
      break;
    case 36:
      arr = hexatrigesimal;
      break;
    default:
      break;
  }

  for (let i in number) {
    result += arr.indexOf(number[i]) / Math.pow(base, Number(i) + 1);
  }

  return result;
};

const isAValidDecimal = (number) => {
  let firstHyphen = number.indexOf("-");
  let lastHyphen = number.lastIndexOf("-");
  let firstPoint = number.indexOf(".");
  let lastPoint = number.lastIndexOf(".");

  if (firstHyphen != -1) {
    if (firstHyphen != 0 || firstHyphen != lastHyphen) {
      return false;
    }
  }

  if (firstPoint != lastPoint) {
    return false;
  }

  return true;
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
      break;
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