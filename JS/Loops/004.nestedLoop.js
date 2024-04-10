// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// ----------------------- solution

let m = 5;

for (let i = 1; i <= m; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += j + " ";
  }
  console.log(result);
}

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// ----------------------- solution

let n = 5;

for (let i = 1; i <= n; i++) {
  let result = "";
  for (let j = 1; j <= n; j++) {
    result += "*" + " ";
  }
  console.log(result);
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// ----------------------- solution

let k = 5;

for (let i = k; i >= 1; i--) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += j + " ";
  }
  console.log(result);
}
