function selectionSort(arr) {
  let solution = [] //create new arr that will put in the numbers sorted

  while(arr.length > 0) { //while loop that continues as long as there are still numbers in the array
    const min = Math.min(...arr); //sets the minimum value in the arr to the variable min
    const idx = arr.indexOf(min); //finds the index of min

    solution.push(min); //pushes min to the end of the solution array
    arr.splice(idx, 1); //removes min from original arr
  }
  return solution;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
