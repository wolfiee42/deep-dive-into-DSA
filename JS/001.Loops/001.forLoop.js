for (var i = 0; i < 100; i++) {
  //   console.log(i + 1 + "saif");
}

for (var i = 90; i < 100; i++) {
  //   console.log(i + 1 + "saif");
}

for (var i = 0; i < 100; i += 10) {
  //   console.log(i + 1 + "incrementing by 10");
}

for (var i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    // console.log(i);
  }
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

let sum = 0;
for (let i = 0; i <= 10; i++) {
  //   console.log(sum + " + " + i + " = " + (sum += i));
}

// summation of even number in between 1 to 100
let summation = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(summation + " + " + i+ " = " + (summation += i));
  }
}
