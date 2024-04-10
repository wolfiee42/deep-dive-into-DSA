var addition = function (a, b) {
  return a + b;
};

setTimeout(function () {
  console.log("logging after 5 seconds of consoling.");
}, 5000);

setTimeout(() => {
  console.log("after 2 seconds");
}, 2000);
