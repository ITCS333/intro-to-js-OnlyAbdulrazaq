function sum(a, b) {
  return a + b;
}

function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

function findLargest(numbers) {
  if (numbers.length === 0) {
    return null;
  }
  let largest = numbers[0];
  for (let n of numbers) {
    if (n > largest) {
      largest = n;
    }
  }
  return largest;
}

function isPalindrome(str) {
  let lowStr = str.toLowerCase();
  let reversed = "";
  for (let char of lowStr) {
    reversed = char + reversed;
  }
  return lowStr === reversed;
}

function filterEvenNumbers(numbers) {
  return numbers.filter(n => n % 2 === 0);
}

module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};