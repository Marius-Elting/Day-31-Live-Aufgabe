const test = ["Hallo", "was", "GHGeht"];
// join macht aus einem Array einen string, in den Klammern gibt man den seperator ein 
console.log(test.join("-"));


//array.splice 

const heroes = ["link", "sonic", "mario", "pikachu"];


//1. wo soll hinzugefügt werden
//2. wieviele Elemente sollen gelöscht oder überschriebenwerden
//3. die neuen Elemente
heroes.splice(1, 0, "lachs");

//1. start
//2. Ende
//excl.  
const newheroes = heroes.slice(1, 3);
console.log(newheroes);


//alphabetisch sortieren

heroes.sort();
console.log(heroes);


const number = [6, 2, 3, 1, 5, 8, 0];
number.sort();
console.log(number);



// X die eigenheit

const numbers = [10, 2, 5, 100, 250, 35, 111];
// numbers.sort();
// https://www.w3schools.com/js/js_array_sort.asp
numbers.sort(function (a, b) { return a - b; });
console.log(numbers);


// for each 


const games = ["WoW", "Diablo II", "Starcraft II"];


// Syntax: array.forEach((element) =>{})
// Callback function 

games.forEach((game, index) => {
    console.log(game);
    console.log(index, game);
});

// ist anders Mächtig 

const gamesDiv = document.getElementById("div");
const gamesLogos = ["https://unsplash.it/400/400", "https://unsplash.it/400/400", "https://unsplash.it/400/400"];

gamesLogos.forEach((gameLogo) => {
    gamesDiv.innerHTML += `<img src="${gameLogo}">`;
});


//array.map
//ähnlich wie forEach bearbeitet die arrays und erstellt ein neues array
const bestgames = games.map((game) => {
    return `${game} is the best game`;
});

console.log(bestgames);

const numberss = [1, 2, 3, 4, 5];

//erstellt einen neuen Array wo alle Zahlen mit 2 multipliziert sind 
const numberssx2 = numberss.map((numberZ) => numberZ * 2);

console.log(numberssx2);