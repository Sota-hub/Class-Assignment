"use strict";

// Dumb function
var romanToInt = function (s) {
  let currentValue = 0;
  for (let c = 0; c < s.length; c++) {
    if (s[c] === "I") {
      currentValue = currentValue + 1;
    } else if (s[c] === "V") {
      s[c - 1] === "I"
        ? (currentValue = currentValue + 5 - 2)
        : (currentValue = currentValue + 5);
    } else if (s[c] === "X") {
      s[c - 1] === "I"
        ? (currentValue = currentValue + 10 - 2)
        : (currentValue = currentValue + 10);
    } else if (s[c] === "L") {
      s[c - 1] === "X"
        ? (currentValue = currentValue + 50 - 20)
        : (currentValue = currentValue + 50);
    } else if (s[c] === "C") {
      s[c - 1] === "X"
        ? (currentValue = currentValue + 100 - 20)
        : (currentValue = currentValue + 100);
    } else if (s[c] === "D") {
      s[c - 1] === "C"
        ? (currentValue = currentValue + 500 - 200)
        : (currentValue = currentValue + 500);
    } else if (s[c] === "M") {
      s[c - 1] === "C"
        ? (currentValue = currentValue + 1000 - 200)
        : (currentValue = currentValue + 1000);
    }
  }
  return currentValue;
};

// Variable romans and numbers
var roman = {
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

// Render roman function
const changeToRoman = (num) => {
  let romanizedNum = "";
  for (const i of Object.keys(roman)) {
    const x = Math.floor(num / roman[i]);
    romanizedNum += i.repeat(x);
    num -= x * roman[i];
  }
  return romanizedNum;
};

// Create romans array
const romans = [];
for (let i = 1000; i > 0; i--) {
  romans.push(changeToRoman(i));
}

// Create numbers array
const numbers = [];
romans.forEach((element) => {
  numbers.push(romanToInt(element));
});

console.log(romans);
console.log(numbers);
