let arrOfNumber = [1, 2, 3, 4, 5, 6, 7, 8];




// insert 9  index number 3

// arrOfNumber[3] = 9;
// arrOfNumber.push(9);
// arrOfNumber.unshift(9);
arrOfNumber.splice(3, 0, 9, 10);
console.log(arrOfNumber);




// remove element of index number 3

// arrOfNumber[3] = undefined;
// arrOfNumber.pop()
// arrOfNumber.pop(3)
// arrOfNumber.shift()
// arrOfNumber.shift(3)
arrOfNumber.splice(3, 1);
arrOfNumber.splice(3, 1, 44);
console.log(arrOfNumber);
