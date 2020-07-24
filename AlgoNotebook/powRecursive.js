var isEven = function (n) {
  return n % 2 === 0;
};

var isOdd = function (n) {
  return !isEven(n);
};

var power = function (x, n) {
  console.log("Computing " + x + " raised to power " + n + ".");
  // base case
  if (n == 0) {
    return 1;
  } else if (n < 0) {
    return 1 / (x * x);
  }

  pow = power(x, Math.floor(n / 2));

  if (isOdd(n)) {
    return x * pow * pow;
  } else {
    return pow * pow;
  }
};

var displayPower = function (x, n) {
  console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
//Program.assertEqual(power(3, 0), 1);
displayPower(3, 1);
//Program.assertEqual(power(3, 1), 3);
displayPower(3, 2);
//Program.assertEqual(power(3, 2), 9);
displayPower(3, -1);
//Program.assertEqual(power(3, -1), 1/3);
