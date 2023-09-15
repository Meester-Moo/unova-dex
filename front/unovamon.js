let pokebutton = document.getElementById("pokebutton");

pokebutton.addEventListener("click", generatePokedex);

function generatePokedex() {
    document.getElementById("pokebutton").style.display = "none";

    console.log("Generate Pokedex button pressed");

    const poketable = document.getElementById("poketable");

    const tableRow = document.createElement("tr");
    
    poketable.appendChild(tableRow);

}




























//Possible ideas:
// 1. Make a function that takes in a pokemon name and returns the pokemon's image, type, stats, etc
// 2. Make a function that generates a random pokemon and displays its image, type, stats, etc
// 3. Do this but using the PokeAPI
