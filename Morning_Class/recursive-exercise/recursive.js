"use strict";

/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base ** exponent;
};
console.log(power(2, 4));
/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// const productOfArray = (numbers) => {
//   let product = 1;
//   for (let i = 0; i < numbers.length; i++) {
//     product *= numbers[i];
//   }
//   return product;
// };

const productOfArray = (numbers) => {
  if (numbers.length === 0) return 1;

  const leadNumber = numbers.shift();
  return leadNumber * productOfArray(numbers);
};
console.log(productOfArray([1, 2, 3, 10]));
/* 03-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = (strings) => {
  let string = strings.split("");
  if (string.length === 0) return "";

  const leadString = string.pop();
  return leadString + reverse(string.join(""));
};
console.log(reverse("awesome"));
/* 04-----------------------isPalindrome---------------------------------------------------------------------
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  return reverse(string) === string;
}
console.log(isPalindrome("awesome"));
console.log(isPalindrome("tacocat"));
