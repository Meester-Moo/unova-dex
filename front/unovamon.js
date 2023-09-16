//gets the button element from the html file as pokebutton
let pokebutton = document.getElementById("pokebutton");

//adds an event listener to the Generate Pokedex button that calls the generatePokedex() function when clicked
pokebutton.addEventListener("click", generatePokedex);

//generatePokedex() (called by event listener)
function generatePokedex() {
    //hides the Generate Pokedex button
    document.getElementById("pokebutton").style.display = "none";

    //debug console.log to show generatePokedex() was called
    console.log("Generate Pokedex button pressed");

    //gets the table element from the html file as poketable
    const poketable = document.getElementById("poketable");

    //creates a table row element (to be reused)
    const tableRow = document.createElement("tr");
    
    //appends the table row element to the poketable
    poketable.appendChild(tableRow);

}




























//Possible ideas:
// 1. Make a function that takes in a pokemon name and returns the pokemon's image, type, stats, etc
// 2. Make a function that generates a random pokemon and displays its image, type, stats, etc
// 3. Do this but using the PokeAPI
