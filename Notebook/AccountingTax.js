function smallestInt(A) {
  //   Filtering and sorting data to minimize time complexity.
  A = A.filter((x) => x > -1).sort((a, b) => a - b);
  let x = 1;

  //     Logical test: if first number in array is <1 continue checking. Otherwise
  for (let i = 0; i < A.length; i++) {
    if (x < A[i]) {
      return x;
    }
    x = A[i] + 1;
  }
  return x;
}

function runTests() {
  console.clear();
  let test1 = [1, 3, 6, 4, 1, 2];
  let test2 = [1, 2, 3];
  let test3 = [-1, -3];

  if (
    smallestInt(test1) == 5 &&
    smallestInt(test2) == 4 &&
    smallestInt(test3) == 1
  ) {
    console.log(
      "Function smallestInt implementation conforms to the specification."
    );
  } else {
    console.log("smallest int is not working properly");
  }
}

function bench(f) {
  let benchA = [];
  for (let i = 0; i < 1000; i++) {
    benchA.push(i);
  }
  let start = Date.now();
  for (let i = 0; i < 10000; i++) f(benchA);
  return Date.now() - start;
}

function runBenchmark() {
  console.clear();
  let time1 = 0;

  for (let i = 0; i < 10; i++) {
    time1 += bench(smallestInt);
  }

  // print result to console
  console.log(`Total time for smallestInt(A): ` + time1);
}
