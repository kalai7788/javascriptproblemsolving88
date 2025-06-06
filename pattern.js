//create pattern 
let n = parseInt(prompt("Enter the value of n: "));

for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n || i === j || i + j === n + 1) {
            row += "*";
        } else {
             row += " ";
        }
    }
    console.log(row);
}
