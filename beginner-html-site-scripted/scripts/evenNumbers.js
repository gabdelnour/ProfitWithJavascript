// for (i=1; i < 11; i++){
//     if(i%2==0){
//         console.log(i)
//     }else{}
// }

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}