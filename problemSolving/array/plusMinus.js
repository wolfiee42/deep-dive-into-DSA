// Hacker rank Algorithm > Warmup > Simple Array Sum

arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  let arrLength = arr.length;
  let positiveArr = [];
  let negativeArr = [];
  let zeroArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveArr.push(arr[i]);
    }
    if (arr[i] < 0) {
      negativeArr.push(arr[i]);
    }
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    }
  }
  let posProportion = (positiveArr.length / arrLength).toFixed(6);
  let negProportion = (negativeArr.length / arrLength).toFixed(6);
  let zeroProportion = (zeroArr.length / arrLength).toFixed(6);

  console.log(posProportion);
  console.log(negProportion);
  console.log(zeroProportion);
}
plusMinus(arr);
