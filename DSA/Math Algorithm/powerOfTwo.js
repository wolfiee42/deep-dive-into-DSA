function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }
  return true;
}

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(2)); //true
console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(8)); //true
//Big-O = O(logn)

console.log(isPowerOfTwoBitWise(1)); //true
console.log(isPowerOfTwoBitWise(2)); //true
console.log(isPowerOfTwoBitWise(5)); //false
console.log(isPowerOfTwoBitWise(8)); //true
// Big-O = O(1) constant
