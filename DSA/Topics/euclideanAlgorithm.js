function euclideanAlgorithms(a, b) {
  if (a === 0) return b;
  return euclideanAlgorithms(b % a, a);
}

console.log(euclideanAlgorithms(10, 15)); // 5
console.log(euclideanAlgorithms(35, 10)); // 5
console.log(euclideanAlgorithms(31, 2)); // 1
