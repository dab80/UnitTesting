function processPalidrome(palidrome_input) {
  let palidrome = "";
  let palidrome_flip = "";
  let palidrome_array = [];
  let letters = /^[a-zA-Z]+$/;

  // -- check for zer length
  if (palidrome_input.length === 0) {
    return false; // -- a palidrome cannot be zero length
  }

  // -- check for non letters
  for (i = 0; i < palidrome_input.length; i++) {
    if (palidrome_input.charAt(i).match(letters) !== null) {
      palidrome = palidrome + palidrome_input.charAt(i);
    } else {
      return false; // non letter dedected
    }
  }

  //force all letters to lower case
  palidrome = palidrome.toLowerCase();

  //create a array from the processed string
  palidrome_array = palidrome.split("");

  //create a flipped string
  palidrome_flip = palidrome_array.reverse().join("");

  if (palidrome == palidrome_flip) {
    return true;
  } else {
    return false;
  }
} //end of processPalidrome

module.exports = processPalidrome;