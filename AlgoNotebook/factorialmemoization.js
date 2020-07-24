let memo = {};

function factorial(number) {
  if (number === 0) {
    return 1;
  } else if (memo.hasOwnProperty(number)) {
    return memo[number];
  } else {
    let result = factorial(number - 1) * number;
    memo[number] = result;
    return result;
  }
}

console.log(factorial(2));
console.log(factorial(1000));
console.log(memo);
