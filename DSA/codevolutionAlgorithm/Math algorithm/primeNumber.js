function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true 1*5 5*1
console.log(isPrime(4)); //false 1*4 2*2 4*1

// Big-O = O(root(n)) linear time complexity.
