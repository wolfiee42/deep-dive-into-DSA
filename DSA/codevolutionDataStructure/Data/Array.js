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

//  reduce, concat, slice, splice.
