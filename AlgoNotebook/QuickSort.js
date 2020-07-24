let items = [
  3,
  5456,
  78,
  7,
  86,
  75,
  67545687,
  468,
  785,
  5865476,
  346,
  3456,
  43,
  6,
  345,
  64,
  56,
  456,
  46867868,
  34255,
  8875,
];

function swap(items, firstIndex, secondIndex) {
  let temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  var index;

  if (items.length > 1) {
    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }

  return items;
}

console.log(quickSort(items, 0, items.length - 1));
