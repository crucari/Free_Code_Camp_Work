
// function slasher(arr, howMany) {
//   // it doesn't always pay to be first
//   return arr;
// }

// slasher([1, 2, 3], 2);
// ________________

function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}
slasher([1, 2, 3], 2);
