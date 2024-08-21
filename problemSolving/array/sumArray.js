// Hacker rank Algorithm > Warmup > Simple Array Sum

const ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
  let sum = 0;
  for (const i of ar) {
    sum += i;
  }
  return sum;
}

console.log(simpleArraySum(ar));
