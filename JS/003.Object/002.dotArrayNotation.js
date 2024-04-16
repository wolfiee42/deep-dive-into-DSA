let friend01 = {
  firstName: "Ashik",
  lastName: "Siraj",
  age: 20,
  address: "mecca, saudi arabia",
  isMarried: false,
};

// dot notation
console.log(friend01.address);

// array notaion
console.log(friend01["firstName"]); //in array notaion the property name should be quotation.

// if you dont know which property we have to explore during work, at that time we will use array notation. Otherwise, in maximum case we'll use dot notation.

const chooseMyFriend = "age";
console.log(friend01[chooseMyFriend]);
