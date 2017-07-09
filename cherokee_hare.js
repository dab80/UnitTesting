function cherokeeHare(startingPopulation, birthRate, numberOfWeeks) {
  //add 10% per week to the starting population
  for (i = 0; i < numberOfWeeks; i++) {
    startingPopulation = (startingPopulation * birthRate) + startingPopulation;
  }
  return Math.trunc(startingPopulation);
}
// console.log(cherokee_hare(200, .1, 5));
// console.log(cherokee_hare(250, .1, 6));
// console.log(cherokee_hare(300, .1, 7));
// console.log(cherokee_hare(400, .1, 8));

module.exports = cherokeeHare;