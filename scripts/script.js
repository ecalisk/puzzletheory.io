let output = document.getElementById("pz1-output");
const solveBtn = document.getElementById("pz1-button");
solveBtn.addEventListener("click", solvePuzzle1);

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

/* Read lineSize, construct line, repeatedly go through line until last man standing, output */
function solvePuzzle1() {
  let lineSize = parseInt(document.getElementById("pz1-input").value);
  let myArray = constructLine(lineSize);
  while (myArray.length != 1) {
    myArray = goThroughLineOnce(myArray);
    output.textContent += myArray + "\n";
  }
}
