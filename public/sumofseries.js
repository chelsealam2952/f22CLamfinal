
const sumSeries = (a, b, c) => {
  console.log(typeof c);

  let d = parseInt(a);
  let e = parseInt(b);
  let incr = parseInt(c);

  console.log(typeof d);

  let x = 0;
  let myArray = [];
  for (let i = d; i <= e; i += incr) {
    myArray.push(i)
  }
  const sum = myArray.reduce((j, k) => j + k, 0)
  return sum;
}

//add event listener
document.querySelector("form").addEventListener("submit", e => {

  e.preventDefault();

  const formData = new FormData(e.target);

  myArray2 = [];
  formData.forEach((val, key) => {
    console.log(`The key is: ${key}, The value is: ${val}`);
    myArray2.push(val)
  });

  const startingNum = myArray2[0];
  const endingNum = myArray2[1];
  const increment = myArray2[2];


  const sum = sumSeries(startingNum, endingNum, increment);
  displayResult(startingNum, endingNum, increment, sum)


})
// add paragraph

const displayResult = (startingNum, endingNum, increment, sum) => {
  const divElement = document.getElementById("output");

  divElement.innerHTML = "";

  const paraElem = document.createElement("p");

  paraElem.innerText = `The sum of numbers from Starting Number ${startingNum} to Ending Number ${endingNum} above incremented by ${increment} is ${sum}`;

  divElement.appendChild(paraElem)
}



