//JavaScript Syntax II Solution Code for Whale Talk. Use this and learn from it!

let input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j]  === input[i]) {
      resultArray.push(input[i])
    }
  }
};

console.log(resultArray.join('').toUpperCase())
