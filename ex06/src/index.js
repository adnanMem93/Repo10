// Create lion object here

var lion = {
name: "Simba",
legs: 4,
tails: 1
};

// End of lion object

function myFunction(par1, par2) { // Change this line
// Only change code below this line
lion[par1] = par2;
return lion;
// Only change code above this line
}
myFunction("roar", "roar-roar"); // Change this line
module.exports = myFunction;