// Challenge: Return the sum of those two numbers and all numbers between them. So, 1+2+3+4=10.//

function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);


function sumAll(arr) {
    //   Using math library to find max number in array. Apply is a function that will find the max. It will find it inbetween null and the array.//
    var maxNum = Math.max.apply(null, arr); 
    //same as above but for the min//
    var minNum = Math.min.apply(null, arr); 
    
    //Used to get range for for loop// 
    var range = maxNum-minNum;
    var total = 0; 
    // zero keeps track of everytime we add a number
    //Total numbers to be added// 
    for (var i=1; i<range; i++)   
       total = total + minNum + i;
    //adding min and max to total// 
    total = total + maxNum + minNum; 
    
    return total;
       
}

sumAll([1, 4]);