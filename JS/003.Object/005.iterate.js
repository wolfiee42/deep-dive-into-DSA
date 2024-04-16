// in oparetor

const obj001 = {
  a: 1,
  b: 2,
  c: 3,
};

// finding whether this operator is avaiable in the object or not
console.log("a" in obj001); //true
console.log("x" in obj001); //false

// for in loop to iterate an object
for (let i in obj001) {
  console.log(i);
  console.log(obj001[i]);
}
