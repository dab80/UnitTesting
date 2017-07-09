 // 13 | hamming
 //Write a function called hamming that accepts two strings.
 //If the lengths of the strings are not equal, the function should return zero.
 //Otherwise, return the number of letters that are in the same position in both words.

 function hamming(string_1, string_2) {
     if (string_1.length !== string_2.length) {
         return 0;
     } else {
         let num_common = 0;
         for (let i = 0; i < string_1.length; i++) {
             if (string_1.charAt(i) === string_2.charAt(i)) {
                 num_common++;
             }
         } //end of for loop
         return num_common;
     } //end of else
 } //end of hamming

 module.exports = hamming;