function processChange(inputNum) {
  //Create a variable called amount stores a quantity of dollars
  let numbers = /^[0-9]+$/; //Change machine
  let amount_num = 0;
  let amount_calc = 0;
  //write some code that produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return.
  let change_array = [0, 0, 0, 0];
  let bills_array = [20, 10, 5, 1];

  let amount = inputNum.toString();

  //check for any invalid chanracters, which is anything other than numbers
  let amount_array = amount.split("");
  let invalid_numbers = false;

  for (i = 0; i < amount.length; i++) {
    if (amount_array[i].match(numbers) === null) {
      invalid_numbers = true;
    }
  }

  if (invalid_numbers) {
    process.stdout.write("Invalid Input - Please enter only whole numbers --> ");
    return null;
  } else {
    amount_calc = parseInt(amount);

    //You want the change machine to return the smallest number of bills possible.
    //how many times does 20 go into inputted amount
    for (j = 0; j < 4; j++) {
      change_array[j] = Math.trunc(amount_calc / bills_array[j]); //how many bills
      amount_calc = amount_calc % bills_array[j];
    }

    //After your code runs you should have a new array of the format [twenties, tens, fives, ones].
    //For example, if amount = 47, you should print an array after your code runs that looks like [2, 0, 1, 2] (two twenties, 0 tens, 1 five, 2 ones).

    //reset variables
    invalid_numbers = false;
  } //end of if

  // -- the array/string represents number of 20s,10s,5s,1s
  return change_array.toString();
} //end of process_change

module.exports = processChange;