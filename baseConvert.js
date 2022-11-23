const inputNum = document.getElementById("input-num");
const inputBase = document.getElementById("input-base");
const outputNum = document.getElementById("output-num");
const outputBase = document.getElementById("output-base");

const binary = ["0", "1", "-", "."];
const octal = ["0", "1", "2", "3", "4", "5", "6", "7", "-", "."];
const decimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "."];
const duodecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "-", "."];
const hexadecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "-", "."];
const duotrigesimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "-", "."];
const hexatrigesimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "."];

const convertBase = () => {
  let input = inputNum.value;
  let base1 = Number(inputBase.value);

  if (isInGivenBase(input, base1) == false) {
    inputNum.value = "invalid input";
    return;
  }

  // how to convert float number with decimal point from a non-10 base?
  // how to prevent multiple input of "."

  if (base1 == 10) {
    input = Number(input);
  } else {
    input = parseInt(input, base1);
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

const isInGivenBase = (number, base) => {
  let result = true;

  switch (base) {
    case 2:
      result = loopBase(number, binary);
      break;
    case 8:
      result = loopBase(number, octal);
      break;
    case 10:
      result = loopBase(number, decimal);
      break;
    case 12:
      result = loopBase(number, duodecimal);
      break;
    case 16:
      result = loopBase(number, hexadecimal);
      break;
    case 32:
      result = loopBase(number, duotrigesimal);
      break;
    case 36:
      result = loopBase(number, hexatrigesimal);
      break;
    default:
      return;
  }

  return result;
};

const loopBase = (number, array) => {
  for (let i of number) {
    if (!array.includes(i)) {
      return false;
    }
  }
  return true;
};
