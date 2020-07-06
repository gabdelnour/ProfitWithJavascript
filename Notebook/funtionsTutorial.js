// let message = "I'm the GOOSE"

// function showMessage() {
//     console.log(message)
// }
// showMessage()

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function showMessage(from, text) { // arguments: from, text
//     console.log(from + ': ' + text);
// }
  
// showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
// showMessage('Ann', "What's up?"); // Ann: What's up? (**)

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function showMessage(from, text) {
//     from = '*' + from + '*'; // make "from" look nicer
//     console.log( from + ': ' + text );
// }

// let from = "Ann";
// showMessage(from, "Hello"); // *Ann*: Hello
// // the value of "from" is the same, the function modified a local copy
// console.log( from ); // Ann

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function checkAge(age) {
//     if (age >=18) {
//         return true
//     }else{
//         return confirm("Do you have permission from your parents?")
//     }
// }

// let age = prompt('How old are you', 18)

// if (checkAge(age)){
//     console.log('Access granted')
// }else{
//     console.log('Access denied')
// }

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// function min(num1,num2){
//     return num1<num2 ? num1 : num2
// }


// console.log(min(2, 5))
// console.log(min(3, -1))
// console.log(min(1, 1))

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function pow(num1, num2){
//     let result = num1
//     for (i=1;i<num2;i++){
//         result *= num1
//     }
//     return result
// }

// console.log(pow(3, 2))
// console.log(pow(3, 3))
// console.log(pow(1, 100))

// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  

// //~~~~~~~~

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//   }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );