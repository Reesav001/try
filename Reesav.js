let oddNumbers = [];

for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}

console.log("Odd Numbers from 1 to 50:", oddNumbers);
let evenNumbers = [];

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

console.log("Even Numbers from 1 to 50:", evenNumbers);
