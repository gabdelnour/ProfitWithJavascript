array = [3, 5, 4, 8, 11, 1, -1, 6];
targetSum = 10;

// Time Complexity = O(N^2); Space Complexity = O(1)
// function twoNumberSum_Slow(array, targetSum) {
//   for (i = 0; i < array.length; i++) {
//     let firstNum = array[i];
//     for (j = 0; j < array.length; j++) {
//       let secondNum = array[j];
//       let outputArray = [];
//       if (i != j && firstNum + secondNum == targetSum) {
//         outputArray = [firstNum, secondNum];
//         return outputArray;
//       }
//     }
//   }
//   return [];
// }
// console.log(twoNumberSum_Slow(array, targetSum));

function twoNumberSum_Fast(array, targetSum) {
  let hash = {};
  for (i = 0; i < array.length; i++) {
    let x = array[i];
    if (targetSum - x in hash) {
      return [array[i], targetSum - x];
    } else hash[array[i]] = true;
  }
  return [];
}

console.log(twoNumberSum_Fast(array, targetSum));
