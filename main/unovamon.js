//////////////////////////////////////////////////////////////

// //Pokemon Objects
// class Pokemon {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   getDetails() {
//     console.log(`${this.name} is a ${this.type} type Pokemon.`);

//     return `${this.name} is a ${this.type} type Pokemon.`;
//   }
// }

// const Snivy = new Pokemon("Snivy", "Grass");
// const Tepig = new Pokemon("Tepig", "Fire");
// const Oshawott = new Pokemon("Oshawott", "Water");

// Snivy.getDetails();

//////////////////////////////////////////////////////////////
//PokeAPI Data Requests

let API_URL = "https://pokeapi.co/api/v2/pokemon/";
let urls = [];

for (let i = 494; i <= 649; ++i) {
  urls.push(API_URL + i);
}

function makeRequest() {
  Promise.all(
    urls.map((url) =>
      fetch(url).then((res) => {
        if (!res.ok) {
          console.log("Network response was not ok: " + res.status);
        }
        return res.json();
      })
    )
  )
    .then((data) => {
      console.log(data); // All data here
      console.log(data[0].name + " this is a test");
      getPokemonData(data);
    })
    .catch((error) => {
      console.error("Error during fetch: " + error.message);
    });
}

//Put each pokemon's data into an array

function getPokemonData(pokemonData) {
  let pokemonNames = [];
  let pokemonType1 = [];
  let pokemonType2 = [];
  for (let i = 0; i <= pokemonData.length - 1; ++i) {
    pokemonNames.push(pokemonData[i].name);
    pokemonType1.push(pokemonData[i].types[0].type.name);

    console.log(pokemonNames[i]);
    console.log(pokemonType1[i]);

    if (pokemonData[i].types[1] != undefined) {
      pokemonType2.push(pokemonData[i].types[1].type.name);
      console.log(pokemonData[i].types[1].type.name);
    }
  }
  console.log(pokemonNames);
  console.log(pokemonType1);
  console.log(pokemonType2);

  // console.log(pokemonData[].)
}

//Test code

//

makeRequest();

//////////////////////////////////////////////////////////////
//Button and Table Logic

//gets the button element from the html file as pokebutton
let pokebutton = document.getElementById("pokebutton");

//adds an event listener to the Generate Pokedex button that calls the generatePokedex() function when clicked
pokebutton.addEventListener("click", generatePokedex);

//Columns
//Unova No., Image, Name, Type, Abilities, Stats (HP, Attack, Defense, Special Attack, Special Defense, Speed)

//generatePokedex() (called by event listener)
function generatePokedex() {
  //hides the Generate Pokedex button
  document.getElementById("pokebutton").style.display = "none";

  //debug console.log to show generatePokedex() was called
  console.log("Generate Pokedex button pressed");

  //gets the table element from the html file as poketable
  let poketable = document.getElementById("poketable");

  //creates table elements (to be used to create them)
  let tableRow = document.createElement("tr");
  poketable.appendChild(tableRow);

  let tableData = document.createElement("td");
  tableRow.appendChild(tableData);
  tableData.innerText = Snivy.getDetails();

  //appends the table row element to the poketable
  poketable.appendChild(tableRow);
}

//Possible ideas:
// 1. Make a function that takes in a pokemon name and returns the pokemon's image, type, stats, etc
// 2. Make a function that generates a random pokemon and displays its image, type, stats, etc
// 3. Do this but using the PokeAPI

//Practice syntax while learning
//Delete later

//Create an async/await

// let p = new Promise((resolve, reject) => {
//     let a = 2 + 1
//     if (a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// })

// function log(value) {
//     console.log(value)
// }

// calculateSum(10, 20, log)

// function calculateSum(num1, num2, poop) {
//     const sum = num1 + num2

//     poop(sum)
// }

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// p.then((message) => {
//   console.log("This is in the then " + message);
// }).catch((message) => {
//   console.log("This is in the catch " + message);
// });
