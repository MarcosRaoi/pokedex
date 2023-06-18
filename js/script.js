// Using PokeAPI (https://pokeapi.co/)

const pokeAPIEndoint = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (pokemon) => {

    let pokemonURL = pokeAPIEndoint + pokemon;
    const pokeAPIResponse = await fetch(pokemonURL);
    console.log("pokemonURL", pokemonURL);
    console.log("pokeAPIResponse", pokeAPIResponse);

}

fetchPokemon(222);