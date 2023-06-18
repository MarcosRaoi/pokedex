// Using PokeAPI (https://pokeapi.co/)

const pokeAPIEndoint = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (pokemon) => {

    let pokemonURL = pokeAPIEndoint + pokemon;
    const pokeAPIResponse = await fetch(pokemonURL);
    const pokeData = await pokeAPIResponse.json();

    console.log("pokemonURL", pokemonURL);
    console.log("pokeAPIResponse", pokeAPIResponse);
    console.log("pokeData", pokeData);

}

fetchPokemon(222);
