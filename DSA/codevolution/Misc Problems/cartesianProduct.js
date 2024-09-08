function cartesianProduct(arr1, arr2) {
  let finalArr = [];
  let arrInx = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let newArr = [arr1[i], arr2[j]];
      finalArr[arrInx] = newArr;
      arrInx++;
    }
  }
  return finalArr;
}

const a = [1, 2];
const b = [3, 4, 5];

console.log(cartesianProduct(a, b)); //  [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

//Big-O = O(m*n)
