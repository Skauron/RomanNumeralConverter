const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

function Convert() {
  output.classList.remove("hidden");
  const value = input.value;
  switch (value) {
    case "":
      output.innerText = "Please enter a valid number";
      break;
    case "-1":
      output.innerText = "Please enter a number greater than or equal to 1";
      break;
    default:
      const valueInt = parseInt(value);
      if (valueInt >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
      } else if (valueInt <= -1) {
        output.innerText = "Please enter a number greater than or equal to 1";
      } else {
        const result = stringToRoman(parseInt(valueInt));
        output.innerText = result;
      }
      break;
  }
}

function stringToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}
