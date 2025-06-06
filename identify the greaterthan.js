// get a  number from user and identify the greaterthan ten and lessthan twenty number

const number = parseFloat(prompt("Enter a number: "));

if (number > 10) {
  console.log(" The number is greater than 10.");
} else if (number < 20) {
  console.log(" The number is less than 20.");
} else {
  console.log(" The number is between 10 and 20.");
}
