//Possible ideas:
// 1. Make a function that takes in a pokemon name and returns the pokemon's image, type, stats, etc
// and put it in a button
// 2. Make a function that generates a random pokemon and displays its image, type, stats, etc
// and put it in a button
// 3. Do this but using the PokeAPI

//TODO get the gifs for each pokemon
//Start making the table

//TODO make the getData code run when you press the button, or keep it async, but add some sort of
//check if the data has been retrieved so when the user presses the button the data is always already there.
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
      getPokemonData(data);
    })
    .catch((error) => {
      console.error("Error during fetch: " + error.message);
    });
}

//Put each pokemon's data into an array
//Like make each pokemon into its own Object / nested array?

function getPokemonData(pokemonData) {
  let nationalNum = [];
  let pokemonName = [];
  let pokemonTypes = [];
  let pokemonAbilities = [];
  let pokemonHiddenAbility = [];
  let pokemonStatArr = [];

  for (let i = 0; i <= pokemonData.length - 1; ++i) {
    //This for loop iterates for EACH pokemon object (pokemonData[i])

    // pokemonData.length - 1
    // =
    // 0 - 155 (index of each JSON pokemon object)

    nationalNum.push(pokemonData[i].id);
    pokemonName.push(pokemonData[i].name);

    let tempPokemonTypesArray = [];
    //make a temp array for the current pokemon's types

    for (let j = 0; j < pokemonData[i].types.length; ++j) {
      tempPokemonTypesArray.push(pokemonData[i].types[j].type.name);
    }

    pokemonTypes.push([tempPokemonTypesArray]);
    //push the tempPokemonTypesArray array into the pokemonTypes array

    let tempAbilityArray = [];
    //make a temp array for the current pokemon's abilities

    let tempHiddenAbilityArray = [];
    //make a temp array for the current pokemon's hidden abilities

    for (let j = 0; j < pokemonData[i].abilities.length; ++j) {
      if (pokemonData[i].abilities[j].is_hidden) {
        tempHiddenAbilityArray.push(pokemonData[i].abilities[j].ability.name); //if the ability is hidden
      } else {
        //if the ability is not hidden
        tempAbilityArray.push(pokemonData[i].abilities[j].ability.name);
      }
    }

    pokemonAbilities.push(tempAbilityArray);
    //push the tempAbilityArray into the pokemonAbilities array

    pokemonHiddenAbility.push(tempHiddenAbilityArray);
    //push the tempHiddenAbilityArray into the pokemonAbilities array
  }

  //Test code

  //
  console.log("Data below:");
  console.log(nationalNum);
  console.log(pokemonName);
  console.log(pokemonTypes);
  console.log(pokemonAbilities);
  console.log(pokemonHiddenAbility);
}

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
//////////////////////////////////////////////////////////////

// //Pokemon Object creation?
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

// function calculateSum(num1, num2, test) {
//     const sum = num1 + num2

//     test(sum)
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
