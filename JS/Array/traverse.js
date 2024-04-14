let arr = [3, 2, 4, 12, 65, 3, 88];

let totalNum = 0;

//addition of array
for (let i = 0; i < arr.length; i++) {
  totalNum += arr[i];
}
// console.log(totalNum);

// odd number
for (let j = 0; j < arr.length; j++) {
  if (arr[j] % 2 === 1) {
    // console.log(arr[j]);
  }
}

// Sum of odd Number
let totalOfOddNum = 0;

for (let l = 0; l < arr.length; l++) {
  if (arr[l] % 2 === 1) {
    totalOfOddNum += arr[l];
  }
}
// console.log(totalOfOddNum);

// even number
for (let j = 0; j < arr.length; j++) {
  if (arr[j] % 2 === 0) {
    // console.log(arr[j]);
  }
}

// Sum of even Number
let totalOfEvenNum = 0;

for (let k = 0; k < arr.length; k++) {
  if (arr[k] % 2 === 0) {
    totalOfEvenNum += arr[k];
  }
}
// console.log(totalOfEvenNum);
