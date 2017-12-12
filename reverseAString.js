// Challenge: Reverse A string
// What does it mean? We need to take the string and reverse it, so if it originally reads ‘hello’, it will now read ‘olleh’. We will need to split the string, 
// and therefore we will be working with Arrays as well.

function reverseString(str) {
  var strArray = [];
  strArray = str.split("");
//   console.log("splitting the string:");
//   console.log(strArray);
  strArray.reverse();
//   console.log(strArray);
  var reverseStr = strArray.join("");
//   console.log("after join");
//   console.log(reverseStr);

  return reverseStr;
  
 
}

console.log(reverseString("Carina"));

// // Code Explanation: 
// Code Explanation:
// Our goal is to take the input, str, and return it in reverse. Our first step is to split the string by characters using split(''). 
// Notice that we don’t leave anything in between the single quotes, this tells the function to split the string by each character.

// Using the split() function will turn our string into an array of characters, keep that in mind as we move forward.

// Next we chain the reverse() function, which takes our array of characters and reverses them.

// Finally, we chain join('') to put our characters back together into a string.
// Notice once again that we left no spaces in the argument for join, this makes sure that the array of characters is joined back together by each character.

// Answer: function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// Different Answer: 
// function reverseString(str) {
// str = str.split('');
// str = str.reverse('');
// str = str.join('');
// return str;
// }

// reverseString("hello");

