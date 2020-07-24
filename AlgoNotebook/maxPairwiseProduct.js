let numbers = [3, 4, 5, 6, 7, 8];

function maxPairwiseProduct(numbers) {
  let n = numbers.length;
  let maxProduct = 0;

  for (i = 0; i < n; i++) {
    for (j = i; j < n; j++) {
      if (i != j) {
        maxProduct = Math.max(maxProduct, numbers[i] * numbers[j]);
      }
    }
  }
  return maxProduct;
}

console.log(maxPairwiseProduct(numbers));
