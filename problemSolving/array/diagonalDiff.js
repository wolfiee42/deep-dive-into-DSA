// Hacker rank Algorithm > Warmup > Diagonal Difference

const squareArr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

let sum1 = 0;
let sum2 = 0;

function diagonalDifference(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // \ diagonal
      if (arr[i] === arr[j]) {
        sum1 += arr[i][j];
      }
      // / diagonal
      if (i + j === arr.length - 1) {
        sum2 += arr[i][j];
      }
    }
  }
  console.log(sum1);
  console.log(sum2);
}

diagonalDifference(squareArr);
