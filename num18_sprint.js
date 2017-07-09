// 18 | sprint
// Write a function called sprint that accepts a single array of objects
// representing Olympic sprinters, each which has a name (string) and
// time (in seconds, so a number). Return the name of the athlete with the fastest time.
function sprint(an_array_of_objects) {
let index_num = 0;
for (let i = 1; i < an_array_of_objects.length; i++) {
    if (an_array_of_objects[i].time < an_array_of_objects[index_num].time) {
    index_num = i;
    }
} //end of for loop
return an_array_of_objects[index_num].name;
}

module.exports = sprint;