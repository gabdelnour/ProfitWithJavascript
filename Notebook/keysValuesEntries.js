// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function sumSalaries(salaries) {
//   let sum = 0;
//   let salariesArr = Object.values(salaries);
//   for (i = 0; i < salariesArr.length; i++) {
//     sum += salariesArr[i];
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let user = {
  name: "John",
  age: 30,
  location: "High as a kite",
};

function count(user) {
  return Object.values(user).length;
}

console.log(count(user)); // 2
