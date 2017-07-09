// 15 | find
//Write a function called find that accepts two parameters:
//the first is an array of numbers and the second is a single number. i
//Return the index of the first time you find the second parameter in the first parameter.
function find(num_array, a_num) {
    return num_array.indexOf(a_num);
}

module.exports = find;