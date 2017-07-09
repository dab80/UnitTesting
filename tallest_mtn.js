//entering as a string so I can use the array split method
// let mtn_heights_str = '16237,17402,15325,20310,14829,18009,16421,16391,15787,14951';
// let mtn_heights_array = mtn_heights_str.split(",");


//To determine the tallest mountain, sort and take the last element

function select_tallest(mtn_array) {
    let banner = "##########################################################################################";
    console.log("");
    console.log(banner);
    console.log("");
    console.log("                     The Top Ten Tallest Mountains in North America");
    console.log("");
    console.log("Their mountain heights are --> " + mtn_array);
    console.log("");

    //the tallest mountain is the last element
    console.log("The tallest mountain height is --> " + Math.max.apply(Math, mtn_array));
    console.log("");
    console.log(banner);
    console.log("");

    return Math.max.apply(Math, mtn_array);
}

module.exports = select_tallest;