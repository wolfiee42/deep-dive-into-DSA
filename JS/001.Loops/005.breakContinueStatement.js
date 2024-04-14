// break statement

// while (true) {
//   let randomNumber = Math.floor(Math.random() * 10 + 1);
//   if (randomNumber === 9) {
//     console.log("Loop is broken and you know why!!");
//     break;
//   } else {
//     console.log(`you got ${randomNumber}`);
//   }
// }

// continue statement

for (let i = 1; i <= 10; i++) {
  if (i === 3 || i === 7) {
    continue;
  } else {
    console.log(i);
  }
}
