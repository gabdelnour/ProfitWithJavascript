function descendingOrder(n) {
  const nums = `${n}`;
  const nArr = [...nums];
  const sortNumber = nArr.sort().reverse().toString().split(",").join("");
  return parseInt(sortNumber);
}

console.log(descendingOrder(194759345876));
