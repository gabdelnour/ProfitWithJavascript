array = [5, 1, 22, 25, 6, -1, 9, 10];
sequence = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
  arrayIndex = 0;
  sequenceIndex = 0;
  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (sequence[sequenceIndex] == array[arrayIndex]) {
      sequenceIndex++;
    } else {
      arrayIndex++;
    }
  }
  return sequenceIndex === sequence.length;
}

console.log(isValidSubsequence(array, sequence));
