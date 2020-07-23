// n⋅(n−1)⋅(n−2)

// This is recursive and completely made by me yay!!

n = 27;

var factorial = function (n) {
  // base case:
  if (n === 0) {
    return 1;
  }

  // recursive case:
  for (var i = 0; i < n; i++) {
    return n * factorial(n - 1);
  }
};

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 5! is " + factorial(5) + ".");

// this is iterative and also completely made by me ayayayay!!

var factorial = function (n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};

console.log("The value of 5! should be " + 5 * 4 * 3 * 2 * 1);
console.log("The value of 5! is " + factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + factorial(0));
