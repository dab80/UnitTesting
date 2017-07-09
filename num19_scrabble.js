// 19 | scrabble
// Write a function called scrabble that accepts a string and an object containing
// a property for each letter and a value representing the number of scrabble points its worth.
// Return the number of points that the whole word is worth.
// Hint: strings have a split() function that might be useful.
function scrabble(a_string, obj_values) {
    let word_value = 0;
    a_string = a_string.toUpperCase();
    // let lookup = "";

    for (let i = 0; i < a_string.length; i++) {
        word_value = word_value + eval("obj_values." + a_string.charAt(i));
        // console.log(a_string.charAt(i) + " is worth " + obj_values.a_string.charAt(i));
        // console.log(obj_values.eval(a_string.charAt(i)));
        // lookup = "obj_values." + a_string.charAt(i);
        // console.log(eval(lookup));
        // console.log(eval("obj_values." + a_string.charAt(i)));

        // console.log(a_char);
    } // end of for loop
    return word_value;
}

module.exports = scrabble;