// without using set interval

// console.log("we are making a counter and printing the time");
// let count = 0;
// function printTime() {
//     count++;
//     console.log("printing the time " + count);
//     if (count < 100) {
//         setTimeout(printTime, 1000);
//     }
// }
// setTimeout(printTime, 1000);


let c = 0;

while (c < 100) {
  const start = new Date();
  let elapsed;

  do {
    const now = new Date();
    elapsed = now - start;
  } while (elapsed < 1000);

  console.log("The counter after 1 second is printed as " + c);
  c++;
}
