//////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////// PokeAPI Data Requests
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

////////////////////////////////////////////////////////////// Store PokeAPI data into arrays

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
  console.log("Data below:");
  console.log(nationalNum);
  console.log(pokemonName);
  console.log(pokemonTypes);
  console.log(pokemonAbilities);
  console.log(pokemonHiddenAbility);
  //
}

makeRequest();

///////////////////////////////////////////////////////////// Table Logic

//Creates TABLE element and associates it with the poketable table in the HTML
let table = document.getElementById("poketable");

//Creates the first ROW of the table (the heading row)
//appends the table row element to the table
let tableHeaderRow = document.createElement("tr");
table.appendChild(tableHeaderRow);

//Creates the heading table data element for the gif column
let gifHeader = document.createElement("td");
tableHeaderRow.appendChild(gifHeader);

gifHeader.innerText = "this is where gifs will go";

//finish headers and row creation

//Columns
//Unova No., Image, Name, Type, Abilities, Stats (HP, Attack, Defense, Special Attack, Special Defense, Speed)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Old Pokebutton
// repurpose this button to allow the user to do other things with the
// displayed data?
//  // gets the button element from the html file as pokebutton
// let pokebutton = document.getElementById("pokebutton");

// //adds an event listener to the Generate Pokedex button that calls the generatePokedex() function when clicked
// pokebutton.addEventListener("click", generatePokedex);

// //generatePokedex() (called by event listener)
// function generatePokedex() {
//   document.getElementById("pokebutton").style.display = "none";
// }

// //debug console.log to show generatePokedex() was called
// console.log("Generate Pokedex button pressed");

//Possible ideas:
// 1. Make a function that takes in a pokemon name and returns the pokemon's image, type, stats, etc
// 2. Make a function that generates a random pokemon and displays its image, type, stats, etc
// 3. Do this but using the PokeAPI
