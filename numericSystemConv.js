const inputNumType = document.getElementById("input-num");
const inputSystem = document.getElementById("num-system");
const outputNumType = document.getElementById("output-num");

const romanDigits = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const convertNumSystem = () => {
  let input = inputNumType.value.toUpperCase();
  let system = inputSystem.value;
  let output = 2;

  switch (system) {
    case "decimal":
      if (!isDecimalNumber(input)) {
        inputNumType.value = "invalid input";
        outputNumType.value = 0;
        return;
      }
      output = convertDecimalToRoman(input);
      break;
    case "roman":
      if (!isRomanNumeral(input)) {
        inputNumType.value = "invalid input";
        outputNumType.value = 0;
        return;
      }
      output = convertRomanToDecimal(input);
      break;
    default:
      break;
  }

  outputNumType.value = output;
};

const isDecimalNumber = (number) => {
  if (isNaN(number)) {
    return false;
  }

  number = Number(number);

  if (
    Number(number) < 1 ||
    Number(number) > 3999 ||
    !Number.isInteger(number)
  ) {
    return false;
  }

  return true;
};

const isRomanNumeral = (number) => {
  for (let i of number) {
    if (!(i in romanDigits)) {
      return false;
    }
  }

  return true;
};

convertDecimalToRoman = (number) => {
  let result = "";
  number = Number(number);

  for (let i in romanDigits) {
    let x = romanDigits[i];

    while (number >= x) {
      result += i;
      number -= x;
    }
  }

  return result;
};

convertRomanToDecimal = (number) => {
  let result = 0;

  for (let i in number) {
    let x = number[i];
    let current = romanDigits[x];
    let y = number[Number(i) + 1];
    let next = romanDigits[y];
    console.log(x, current, y, next);

    if (y == undefined && next == undefined) {
      result += current;
    } else {
      if (current >= next) {
        result += current;
      } else {
        result -= current;
      }
    }
    console.log(result);
  }

  return result;
};
