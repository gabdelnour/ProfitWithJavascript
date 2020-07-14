// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//           Sum of #
function sumTo(number) {
  let sum = 0;
  while (number > 0) {
    sum += number;
    number--;
  }
  return sum;
}

console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~
//             Sum of number (recursive)
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert(sumTo(100));

// ~~~~~~~~~~~~~~~~~~~~~~~~
//         Factorial
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

alert(factorial(5)); // 120

//~~~~~~~~~~~~~~~~~~~~~~~~~~
//       Factorial (Recursive)
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert(factorial(5)); // 120
