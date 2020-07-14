// let now = new Date();
// console.log(now);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970);

// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(Dec31_1969);

// // Date format be like
// // new Date(year, month, date, hours, minutes, seconds, ms)

// console.log(new Date().getTimezoneOffset());

// let date = new Date();
// console.log(+date);

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // this is a cool way to understand how long a function takes

// let start = new Date(); // start measuring time

// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // end measuring time

// console.log(`The loop took ${end - start} ms`);

// //~~~~~~~~~~~

// // however this is a better way of doing it
// let start = Date.now(); // milliseconds count from 1 Jan 1970

// // do the job
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // done

// alert(`The loop took ${end - start} ms`); // subtract numbers, not dates

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let date = new Date(2012, 01, 20, 03, 12);

// function getWeekDay(date) {
//   let weekDay = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
//   let index = date.getDay();
//   return weekDay[index];
// }

// console.log(getWeekDay(date));

// // //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// // //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // //        Seconds since today

// function getSecondsToday() {
//   let now = new Date();

//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today;
//   return Math.round(diff / 1000);
// }

// console.log(getSecondsToday());

// // //~~~~~~~~~ alternatively you could ~~~~~~~~~

// function getSecondsToday() {
//   let d = new Date();
//   return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
// }

// console.log(getSecondsToday());

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// //        Seconds until tomorrow

// function getSecondsUntilTomorrow() {
//   let now = new Date();
//   let tomorrow = new Date(
//     now.getUTCFullYear(),
//     now.getMonth(),
//     now.getDate() + 1
//   );

//   let diff = tomorrow - now;
//   return Math.round(diff / 1000);
// }

// console.log(getSecondsUntilTomorrow());
