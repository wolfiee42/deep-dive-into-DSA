let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

let isRunnnig = true;
while (isRunnnig) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber === 9) {
    console.log("Loop is broken and you know why!!");
    isRunnnig = false;
  } else {
    console.log(`you got ${randomNumber}`);
  }
}
