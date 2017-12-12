// Our goal for solving this problem is tidying up the string passed in, and checking whether it is in fact a palindrome.

// If you are unsure of what a palindrome is, it is a word or phrase that when reversed spells the same thing forwards or backwards. 


// function palindrome(str) {
//   // Good luck!
//   return true;
// }



// palindrome("eye");

Ans: function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}