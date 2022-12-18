var LINE_SIZE = 100;

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

//DEBUG
let myArray = constructLine(100);
myArray = goThroughLineOnce(myArray);
console.log(myArray);

myArray = goThroughLineOnce(myArray);
console.log(myArray);

myArray = goThroughLineOnce(myArray);
console.log(myArray);

myArray = goThroughLineOnce(myArray);
console.log(myArray);

myArray = goThroughLineOnce(myArray);
console.log(myArray);

myArray = goThroughLineOnce(myArray);
console.log(myArray);
