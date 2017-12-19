//Challenge: Remove falsy values aka false, null, 0, "",underfined, and NaN.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
 var holderArray=[];
  holderArray= arr.filter(removefalseVariable);
  //calls filter to run removefalse method
  
  return holderArray;
}

function removefalseVariable(value){
  return Boolean(value);
  //returns value for all non-falsy values aka will return all true values
}

bouncer([7, "ate", "", false, 9]);
