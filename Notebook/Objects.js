// user = new Object();
// user.name = "John";
// user.surname = "Smith";
// console.log(user);
// delete user.name;
// console.log(user);

// // ~~~~~~~~~~~~~~~~~~~~~~~~~

// function isEmpty(obj) {
//   for (let key in obj) {
//     // if the loop has started, there is a property
//     return false;
//   }
//   return true;
// }

// let obj = {};

// console.log(isEmpty(obj)); // true

// obj["8:30"] = "get up";

// console.log(isEmpty(obj)); // false

// // ~~~~~~~~~~~~~~~~~~~~~~~~~

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function sumValues(salaries) {
//   let sum = 0;
//   for (index in salaries) {
//     sum += salaries[index];
//   }
//   return sum;
// }

// console.log(sumValues(salaries));

// // ~~~~~~~~~~~~~~~~~~~~~~~~~
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   let product = 1;
//   for (index in obj) {
//     if (typeof obj[index] == "number") {
//       product *= obj[index];
//     }
//     continue;
//   }
//   return product;
// }

// console.log(multiplyNumeric(menu));

// // ~~~~~~~~~~~~~~~~~~~~~~~~~

// function marry(man, woman) {
//   woman.husband = man;
//   man.wife = woman;

//   return {
//     father: man,
//     mother: woman,
//   };
// }

// let family = marry(
//   {
//     name: "John",
//   },
//   {
//     name: "Ann",
//   }
// );

// console.log(family);

// // ~~~~~~~~~~~~~~~~~~~~~~~~~

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().up().down().showStep();
