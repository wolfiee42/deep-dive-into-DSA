function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivotElement = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      leftArr[leftIndex] = arr[i];
      leftIndex++;
    } else {
      rightArr[rightIndex] = arr[i];
      rightIndex++;
    }
  }

  return [...quickSort(leftArr), pivotElement, ...quickSort(rightArr)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr)); // Output: [-6, -2, 4, 8, 20]
