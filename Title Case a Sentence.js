// Challenge: Title case a sentence 

// function titleCase(str) {
//     var words = str.split(' ');
//      return str;
//       return str.replace(/[\W_]/g, '').toLowerCase() ===
// }

// titleCase("I'm a little tea pot");

Ans: function titleCase(str) {
      var words = str.toLowerCase().split(' ');
      for(var i = 0; i<words.length;i++) //   for(var i in words)
        words[i] = firstLetterUp(words[i]);
      str = words.join(' '); 
      return str;
    }

function firstLetterUp(str) {
  var word = str.split('');
  word[0] = word[0].toUpperCase();
  str = word.join('');
  return str;
}

titleCase("I'm a little tea pot");