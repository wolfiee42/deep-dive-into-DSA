// reverse the given array.

const reversableArr = [1, 2, 3, 4, 5, 6, 7, 8];

// 1
let reversedArr = [];
for (let i = reversableArr.length - 1; i >= 0; i--) {
  reversedArr.push(reversableArr[i]);
}
// console.log(reversedArr);

// 2

// implementing proper logic
for (let j = 0; j < (reversableArr.length / 2); j++) {
  let temp = reversableArr[j];
  reversableArr[j] = reversableArr[reversableArr.length - 1 - j];
  reversableArr[reversableArr.length - 1 - j] = temp;
}

console.log(reversableArr);
