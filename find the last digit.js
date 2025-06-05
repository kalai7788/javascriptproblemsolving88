//find the last digit in the given int

const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a number:"));

let lastDigit = Math.abs(number) % 10; 
console.log("The last digit is: " + lastDigit);
