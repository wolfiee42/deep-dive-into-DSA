// binary search only works on sorted array. if you have a unsorted array you can use linear search. if you want to use binary search on an unsorted array then you need to sort it first.
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1

// Big-O = O(logn)
