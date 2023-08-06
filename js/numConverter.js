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

  switch (system) {
    case "decimal":
      if (!convertDecimalToRoman(input)) {
        inputNumType.value = "invalid input";
        outputNumType.value = 0;
        return;
      }
      break;
    case "roman":
      if (!convertRomanToDecimal(input)) {
        inputNumType.value = "invalid input";
        outputNumType.value = 0;
        return;
      }
      break;
    default:
      break;
  }
};

convertDecimalToRoman = (number) => {
  let result = "";

  if (
    isNaN(number) ||
    Number(number) < 1 ||
    Number(number) > 3999 ||
    !Number.isInteger(Number(number))
  ) {
    return false;
  }

  number = Number(number);

  for (let i in romanDigits) {
    let x = romanDigits[i];

    while (number >= x) {
      result += i;
      number -= x;
    }
  }

  outputNumType.value = result;
  return true;
};

convertRomanToDecimal = (number) => {
  // let result = 0;

  // for (let i in number) {
  //   let x = number[i];
  //   let current = romanDigits[x];
  //   let y = number[Number(i) + 1];
  //   let next = romanDigits[y];

  //   if (y == undefined && next == undefined) {
  //     result += current;
  //   } else {
  //     if (current >= next) {
  //       result += current;
  //     } else {
  //       result -= current;
  //     }
  //   }
  //   console.log(result);
  // }

  // return result;

  let result = 0;

  for (let i of number) {
    if (!(i in romanDigits)) {
      return false;
    }
  }

  let arr = [];

  for (let i = 0; i < number.length; i++) {
    let current = number[i];
    let next = number[i + 1];

    if (next == undefined) {
      arr.push(romanDigits[current]);
    } else {
      let cn = current + next;

      if (cn in romanDigits) {
        arr.push(romanDigits[cn]);
        i++;
      } else {
        arr.push(romanDigits[current]);
      }
    }
  }

  let isDescending = arr.every((x, i) => {
    return (i == 0) || (x <= arr[i - 1]);
  });

  console.log(arr, isDescending)

  if (isDescending) {
    result = arr.reduce((a, b) => a + b);
  } else {
    return false;
  }

  outputNumType.value = result;
  return true;
};
