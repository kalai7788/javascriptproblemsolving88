// check a number is factorial number 

let number = parseInt(prompt("Enter a number to calculate its factorial:"));

let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(`The factorial of ${number} is ${factorial}.`);
