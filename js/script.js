// Using PokeAPI (https://pokeapi.co/)

const pokeAPIEndoint = "https://pokeapi.co/api/v2/pokemon/";

const pokemonNameDOM = document.querySelector(".pokemon-name");
const pokemonIdDOM = document.querySelector(".pokemon-id");
const pokemonImageGifDOM = document.querySelector(".pokemon-gif");

function pokeNameRender(pokeDataFetched) {
    let pokeName = pokeDataFetched.name;
    pokemonNameDOM.innerHTML = pokeName;

    console.log("pokeName", pokeName);
}

function formatPokeId(pokeId) {
    let pokeLocale = "pt-BR";
    let pokeMinimumDigits = 3;
    let pokeFormatOptions = {
        minimumIntegerDigits: pokeMinimumDigits,
        useGrouping: false,
    };
    let pokeFormattedPokeId = pokeId.toLocaleString(pokeLocale, pokeFormatOptions);

    console.log("pokeFormattedPokeId", pokeFormattedPokeId);
    return pokeFormattedPokeId;
}

function pokeIdRender(pokeDataFetched) {
    let pokeId = pokeDataFetched.id;
    let pokeFormattedId = formatPokeId(pokeId);

    // pokemonIdDOM.innerHTML = pokeId;
    pokemonIdDOM.innerHTML = pokeFormattedId;

    console.log("pokeId", pokeId);
    console.log("pokeFormattedId", pokeFormattedId);
}

function pokeImgGifRender(pokeDataFetched) {
    let pokeGif = pokeDataFetched["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
    pokemonImageGifDOM.src = pokeGif;

    console.log("pokeGif", pokeGif);
}

const fetchPokemon = async (pokemon) => {

    let pokemonURL = pokeAPIEndoint + pokemon.toLowerCase();
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
    pokeIdRender(pokeDataFetched);
    pokeImgGifRender(pokeDataFetched);
}

// Render first pokémon <3 luv ya bulbasaurO, but char >>>>>>> is better
// renderPokemon(1);
renderPokemon("Bulbasaur");
