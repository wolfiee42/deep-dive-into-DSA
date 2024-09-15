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

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);
console.log(obj);
obj.sayMyName();

// Object.keys()  .values() .entries()
