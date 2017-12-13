
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");


function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}