const objectNum44 = {
  x: 12,
  y: 23,
  z: 34,
};

const method1 = Object.keys(objectNum44); // [ 'x', 'y', 'z' ]
const method2 = Object.values(objectNum44); //[ 12, 23, 34 ]
const method3 = Object.entries(objectNum44); // [ [ 'x', 12 ], [ 'y', 23 ], [ 'z', 34 ] ]



console.log(method1); // returns key parameters in array.
console.log(method2); // returns value parameters in array.
console.log(method3); // returns 2 dymensional array of the object.


// create duplicate object
// 1
const objectNum45 = objectNum44;
// objectNum45.x = 22;

console.log(objectNum44);
console.log(objectNum45);
// 1 is not good because it is a mutable concept, which correpts the original value of the object.



// 2
const objectNum46 = Object.assign({}, objectNum44);
objectNum46.x = 11;

console.log(objectNum44);
console.log(objectNum46);