array = [3, 5, 4, 8, 11, 1, -1, 6];
targetSum = 10;

function twoNumberSum(array, targetSum) {
  for (i = 0; i < array.length; i++) {
    let firstNum = array[i];
    for (j = 0; j < array.length; j++) {
      let secondNum = array[j];
      let outputArray = [];
      if (i != j && firstNum + secondNum == targetSum) {
        outputArray = [firstNum, secondNum];
        return outputArray;
      }
    }
  }
  return [];
}

console.log(twoNumberSum(array, targetSum));
