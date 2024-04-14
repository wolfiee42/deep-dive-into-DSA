let searchableArr = [2, 34, 67, 34, 12, 67, 23, 87];

const requiredNumber = 33;
let isFound = false;
for (let i = 0; i < searchableArr.length; i++) {
  if (searchableArr[i] === requiredNumber) {
    console.log(`Data Found at index number ${i}.`);
    isFound = true;
    break;
  }
}

if(!isFound){
    console.log("Data Not Found.");
}