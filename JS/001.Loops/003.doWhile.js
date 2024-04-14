let isRunning = true;

do {
  let randomGeneratedNumber = Math.floor(Math.random() * 10 + 1);
  if ((randomGeneratedNumber = 5)) {
    console.log("hu haa. loop is broken and again you know why.");
    isRunning = false;
  } else {
    console.log(`generated number is ${randomGeneratedNumber}`);
  }
} while (!!isRunning);


// i.e. i think this code has bug. feel free to point out if you find some.