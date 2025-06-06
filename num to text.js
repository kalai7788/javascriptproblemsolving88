// number to text


const num = prompt("Enter a number: ");

const digits = {
  '0': "Zero",
  '1': "One",
  '2': "Two",
  '3': "Three",
  '4': "Four",
  '5': "Five",
  '6': "Six",
  '7': "Seven",
  '8': "Eight",
  '9': "Nine"
};

let result = "";

for (let i = 0; i < num.length; i++) {
  const digit = num[i];
  if (digits[digit] !== undefined) {
    result += digits[digit] + " ";
  } else {
    result += "(Invalid) ";
  }
}

console.log("In words:", result.trim());
