// You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.

function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}


// Code Explanation:
// Create a variable to store the results as an array.
// Create an outer loop to iterate through the outer array.
// Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
// Create said inner loop to work with the sub-arrays.
// Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
// After the inner loop, save the largest number in the corresponding position inside of the results array.
// And finally return said array.