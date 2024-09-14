let arr = [1, 2, 3, "Saif"];

// writing methods without actually writing methods using raw js

// arr.push(4);
// const lastIndex = arr.length;
// arr[lastIndex] = 4;

// arr.unshift(0);
// let newElement = 0;
// let newArr = [newElement];
// for (let i = 0; i < arr.length; i++) {
//   newArr[i + 1] = arr[i];
// }

// arr.pop();
// const lastIndex = arr.length - 1;
// let newArr = [];
// for (let i = 0; i <= lastIndex - 1; i++) {
//   newArr[i] = arr[i];
// }
// console.log(newArr);

// arr.shift();
// let newArr = [];
// for (let i = 1; i < arr.length; i++) {
//   newArr[i - 1] = arr[i];
// }
// console.log(newArr);

// for (item of arr) {
//   console.log(item);
// }

//map
// arr.map((item) => console.log(item));
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// -----------------------------------
//filter
// const filteredArr = arr.filter(removeNum);

// function removeNum(num) {
//   return num !== 3;
// }
// console.log(filteredArr);

// let newArrInd = 0;
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 3) continue;
//   newArr[newArrInd] = arr[i];
//   newArrInd++;
// }

// console.log(newArr);
// -----------------------------------

let arr2 = [1, 2, 3, 4];

// reduce
// const totalPrice = arr2.reduce((accumulator, arr2) => {
//   return (accumulator += arr2);
// }, 0);

// let sum = 0;
// for (let i = 0; i < arr2.length; i++) {
//   sum += arr2[i];
// }

// console.log(totalPrice);
// console.log(sum);

const arr1 = ["Cecilie", "Lone"];
const arr24 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr24, arr3);
console.log(children);

let newArr = [];
let newArrInd = 0;

newArr = [...arr1, ...arr24, ...arr3];
console.log(newArr);

let newArr2 = [];
let newArrInd2 = 0;

for (let i = 0; i < arr1.length; i++) {
  newArr2[newArrInd2] = arr1[i];
  newArrInd2++;
}

for (let i = 0; i < arr24.length; i++) {
  newArr2[newArrInd2] = arr24[i];
  newArrInd2++;
}
for (let i = 0; i < arr3.length; i++) {
  newArr2[newArrInd2] = arr3[i];
  newArrInd2++;
}

console.log(newArr2);

//   concat, slice, splice.
