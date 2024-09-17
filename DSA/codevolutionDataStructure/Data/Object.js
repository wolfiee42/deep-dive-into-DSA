const obj = {
  name: "Heisenburg",
  age: 21,
  "key-three": true,
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "football";
delete obj["key-three"];

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["key-three"]);
// console.log(obj);
// obj.sayMyName();

// Object.keys()  .values() .entries()

let person = {
  name: "Saif",
  age: 25,
  job: "Developer",
  city: "New York",
  skills: ["JavaScript", "HTML", "CSS"],
};

console.log(Object.keys(person)); // returns array of the keys.
console.log(Object.values(person)); // returns array of the values.
console.log(Object.entries(person)); // returns 2 dymensional array of the object.
