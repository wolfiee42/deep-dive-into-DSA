function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let leftArr = [];
  let rightArr = [];

  const mid = Math.floor(arr.length / 2);
  for (let i = 0; i < mid; i++) {
    leftArr[i] = arr[i];
  }
  for (let i = mid; i < arr.length; i++) {
    rightArr[i - mid] = arr[i];
  }

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedArrInd = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      sortedArr[sortedArrInd] = leftArr[leftIndex];
      leftIndex++;
    } else {
      sortedArr[sortedArrInd] = rightArr[rightIndex];
      rightIndex++;
    }
    sortedArrInd++;
  }
  while (leftIndex < leftArr.length) {
    sortedArr[sortedArrInd] = leftArr[leftIndex];
    sortedArrInd++;
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    sortedArr[sortedArrInd] = rightArr[rightIndex];
    sortedArrInd++;
    rightIndex++;
  }

  return sortedArr;
}

const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr)); // Output: [-6, -2, 4, 8, 20];
