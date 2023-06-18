// Using PokeAPI (https://pokeapi.co/)

const pokeAPIEndoint = "https://pokeapi.co/api/v2/pokemon/";

const fetchPokemon = async (pokemon) => {

    let pokemonURL = pokeAPIEndoint + pokemon;
    const pokeAPIResponse = await fetch(pokemonURL);
    const pokeData = await pokeAPIResponse.json();

    console.log("pokemonURL", pokemonURL);
    console.log("pokeAPIResponse", pokeAPIResponse);
    console.log("pokeData", pokeData);

    return pokeData;
}

// fetchPokemon(222); (i love you Corsola <3)

const renderPokemon =  (pokemon) => {

    let pokeDataFetched =  fetchPokemon(pokemon);

    console.log("pokeDataFetched", pokeDataFetched);

}

renderPokemon(25)