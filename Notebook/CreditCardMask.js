function maskify(cc) {
  let ccArr = [...cc];
  let i = 0;
  while (i < ccArr.length - 4) {
    ccArr[i] = "#";
    i++;
  }
  return ccArr;
}

console.log(maskify("Skippy"));
