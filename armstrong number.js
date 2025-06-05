//check armstrong number or not

function isArmstrong(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}
let number = 153;

if (isArmstrong(number)) {
  console.log(number + " is an Armstrong number.");
} else {
  console.log(number + " is NOT an Armstrong number.");
}
