// Chapter Number 15

var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";
alert("Welcome to " + city3);
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
alert("Welcome to " + cities[4]);
var mixedArray = [1, "Bob", "Now is", true];
alert(mixedArray[0]);

// Chapter Number 16

var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[6] = "snake";
pets[4] = "fish";
pets[5] = "gerbil";
pets.push("fish", "ferret");
console.log(pets);

// Chapter Number 17

var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";
pets.shift();
pets.unshift("fish", "ferret");
pets.splice(2, 2, "pig", "duck", "emu");
pets.splice(2, 0, "pig", "duck", "emu");
pets.splice(2, 2);
var noPets = pets.slice(2, 4);
console.log(noPets);

// Chapter Number 18

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
if (cleanestCities[0] === cleanestCities[0]) {
    alert("It's one of the cleanest cities");
}
else if (cleanestCities[0] === cleanestCities[1]) {
    alert("It's one of the cleanest cities");
}
else if (cleanestCities[0] === cleanestCities[2]) {
    alert("It's one of the cleanest cities");
}
else if (cleanestCities[0] === cleanestCities[3]) {
    alert("It's one of the cleanest cities");
}
    else if (cleanestCities[0] === cleanestCities[4]) {
alert("It's one of the cleanest cities");
}
else {
    alert("It's not on the list");
}
for (var i = 0; i <= 4; i++) {
if ("Tucson" === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
}
}

// Chapter Number 19 

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var matchFound = "no";
for (var i = 0; i <= 4; i++){;
if (cleanestCities[1] === cleanestCities[i]) {
    matchFound = "yes";
    alert("It's one of the cleanest cities");
}
}
if (matchFound === "no") {
    alert("It's not on the list");
}

var matchFound = false;
for (var i = 0; i <= 4; i++){
if (cleanestCities[5] === cleanestCities[i]) {
    matchFound = true;
    alert("It's one of the cleanest cities");
break;
}
}
if (matchFound === false) {
    alert("It's not on the list");
}

var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++){
if (cleanestCities[0] === cleanestCities[i]) {
matchFound = true;
    alert("It's one of the cleanest cities");
    break;
}
}
if (matchFound === false) {
    alert("It's not on the list");
}

//  Chapter Number 20

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
for (var j = 0; j < lastNames.length; j++) {
    fullNames.push(firstNames[i] + lastNames[j]);
}
}
console.log(fullNames);