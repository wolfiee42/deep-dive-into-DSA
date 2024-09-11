// Basic
function gcd(a, b) {
  if (a == b) return a;
  if (a > b) {
    return gcd(a - b, b);
  } else {
    return gcd(a, b - a);
  }
}

console.log(gcd(10, 15)); // 5
console.log(gcd(35, 10)); // 5
console.log(gcd(31, 2)); // 1

// using recursion
function euclideanAlgorithms(a, b) {
  if (a === 0) return b;
  return euclideanAlgorithms(b % a, a);
}

console.log(euclideanAlgorithms(10, 15)); // 5
console.log(euclideanAlgorithms(35, 10)); // 5
console.log(euclideanAlgorithms(31, 2)); // 1
