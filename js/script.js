// Using PokeAPI (https://pokeapi.co/)

const pokeAPIEndoint = "https://pokeapi.co/api/v2/pokemon/";

const pokemonNameDOM = document.querySelector(".pokemon-name");

function pokeNameRender(pokeDataFetched) {
    let pokeName = pokeDataFetched.name
    pokemonNameDOM.innerHTML = pokeName;
}

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

const renderPokemon = async (pokemon) => {

    let pokeDataFetched = await fetchPokemon(pokemon);
    console.log("pokeDataFetched", pokeDataFetched);

    pokeNameRender(pokeDataFetched);

}

renderPokemon(1);
