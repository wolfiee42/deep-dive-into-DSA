// Hacker rank Algorithm > Warmup > stairCase

function staircase(n) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    let output = "";
    for (let j = n - 1; j > i; j--) {
      output += " ";
    }
    for (let k = 0; k < i + 1; k++) {
      output += "#";
    }
    console.log(output);
  }
}

staircase(4);
