// 14 | pokemon
//Write a function called pokemon that accepts an array of numbers.
//Each element in the array represents a day, and the number represents the
//number of Pokemon caught on that day. i
//Return an array of the same length that contains the number of total Pokemon caught up to that day.
function pokemon(num_array) {
    let num_pokemon = 0;
    let array_pokemon = [];
    for (let i = 0; i < num_array.length; i++) {
        num_pokemon = num_pokemon + num_array[i];
        array_pokemon.push(num_pokemon);
    }
    return array_pokemon;
}

module.exports = pokemon;