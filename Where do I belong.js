// Challenge:  You need to find where in the array a number should be inserted by order, and return the index where it should go.

// Steps:
// 1) Arragenemnts contents by lowest to highest-Using the sort function 
function getIndexToIns(arr, num) {
arr.sort(function (a,b) {
    return a-b; //he compare function can simply subtract b from a. The following function will sort the array ascending//
});
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}
  