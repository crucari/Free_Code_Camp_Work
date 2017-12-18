// Challenge: Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.


function mutation(arr) {
//Lower case both string inputs for comparision 
    var word1 = arr[0].toLowerCase();
    var word2 = arr[1].toLowerCase();
    
//length of 2nd word is important because we are going through its letters to see if they are in the word// 
    for (var i=0;i<word2.length; i++){
//value holder for character// 
    var value = word1.indexOf(word2[i]);
   
   if (value=== -1) {
        return  false;
        //if -1 is returned it means it does not contain the words 
   }
   }
  return true;
}
   

mutation(["hello", "hey"]);
