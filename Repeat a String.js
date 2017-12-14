
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);

function repeatStringNumTimes(str, num) {
 if(num>0){
    return str.repeat(num);
  }
  return "";
}