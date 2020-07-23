// I still don't know much about BSTs... or how to iniciate them
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(target - closes) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
