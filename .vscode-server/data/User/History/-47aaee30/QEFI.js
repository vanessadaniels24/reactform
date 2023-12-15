const input = prompt(
    "Enter your Frozen yogurt order",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
 const froyoflavorArray = ["vanilla", "vanilla","vanilla", "strawberry", "coffee","coffee"]
 console.log(froyoArray("vanilla,"),("strawberry"),("coffee"))
 // create an input that list the froyo flavor.
 const froyoArray = userInputString.split (",");
 console.log(froyoArray);
 // using the loop through the array of flavor.
 const froyocounts = {};
for (const froyo of froyoArray) {
if (froyo in froyocounts) {
    froyocounts [froyo]++;
} else {
    froyocounts [froyo] = 1;
}
};
console.table(froyocounts)