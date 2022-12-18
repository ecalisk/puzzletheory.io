var LINE_SIZE = 1000;

/* func: Create an array of people */
function constructLine(lineSize) {
  const lineArray = [];
  for (let i = 0; i < lineSize; i++) {
    lineArray[i] = i + 1;
  }
  return lineArray;
}

/* func: Send back every second element, get rid of all others */
function goThroughLineOnce(lineArray) {
  const newArray = [];
  for (let i = 0; i < lineArray.length; i++) {
    if ((i + 1) % 2 === 0) newArray.push(lineArray[i]);
  }
  return newArray;
}

/* Construct line, repeatedly go through line until last man standing */
let myArray = constructLine(LINE_SIZE);
while (myArray.length != 1) {
  myArray = goThroughLineOnce(myArray);
  console.log(myArray);
}
