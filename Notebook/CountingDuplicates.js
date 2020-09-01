function duplicateCount(text) {
  let textArr = text.toLowerCase().split("");
  let textDic = {};
  let textCount = 0;
  textArr.forEach((element) => {
    if (textDic[element] > 0) {
      textDic[element] += 1;
    } else {
      textDic[element] = 1;
    }
  });
  Object.values(textDic).forEach((element) => {
    if (element > 1) {
      textCount++;
    }
  });
  return textCount;
}

console.log(duplicateCount("Indivisibilities"));
