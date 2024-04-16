// comparing both objects in several ways

let obj1 = {
  a: 12,
  b: 42,
};

let obj2 = {
  a: 12,
  b: 42,
};


// 1
const com1 = obj1 === obj2;
console.log(com1); //false because it is referring to memory location , not actual value.


// 2
if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true); // true, but in large scale this condition is unusable
} else {
  console.log(false);
}


// 3
const com3 = JSON.stringify(obj1) === JSON.stringify(obj2); //easy and developer friendly.
console.log(com3);
