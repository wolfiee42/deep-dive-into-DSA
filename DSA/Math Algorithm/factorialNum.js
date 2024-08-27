function factorialNum(n) {
  let output = 1;
  for (let i = 2; i <= n; i++) {
    output *= i;
  }
  return output;
}

console.log(factorialNum(0)); // 1
console.log(factorialNum(1)); // 1
console.log(factorialNum(4)); // 24
console.log(factorialNum(5)); // 120

// Big-O = O(n) //linear
