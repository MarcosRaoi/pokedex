// Using PokeAPI (https://pokeapi.co/)

const pokeAPIEndoint = "https://pokeapi.co/api/v2/pokemon/";

const pokeLoading = "./images/spinning-loading.gif";
const pokeMissingNo = "./images/missingno.gif";

const pokemonNameDOM = document.querySelector(".pokemon-name");
const pokemonIdDOM = document.querySelector(".pokemon-id");
const pokemonImageGifDOM = document.querySelector(".pokemon-gif");

const pokemonFormDOM = document.querySelector(".pokemon-form");
const pokemonInputDOM = document.querySelector(".pokemon-input-search");

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

function resetPokeInput() {
    pokemonNameDOM.innerHTML = "Loading...";
    pokemonInputDOM.value = "";
}

function hidePokeSeparator() {
    let pokeSeparatorDOM = document.querySelector(".poke-separator");
    pokeSeparatorDOM.innerHTML = "";
}

function showPokeSeparator() {
    let pokeSeparatorDOM = document.querySelector(".poke-separator");
    pokeSeparatorDOM.innerHTML = "-";
}

function loadingPokeDataFetch() {
    hidePokeSeparator();
    pokemonImageGifDOM.src = pokeLoading;
    pokemonNameDOM.innerHTML = "Loading...";
    pokemonIdDOM.innerHTML = "";
}

function getMissingNo() {
    //pokeDataFetched["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"]
    let fakePokeSprites = {"versions": {"generation-v":{"black-white":{"animated":{"front_default": pokeMissingNo}}}}}
    let fakePokeData = {
        "id": "???",
        "name": "Not found :(",
        "sprites": fakePokeSprites,
    }
    return fakePokeData;
}

const fetchPokemon = async (pokemon) => {

    let pokemonURL = pokeAPIEndoint + pokemon.toLowerCase();
    const pokeAPIResponse = await fetch(pokemonURL);

    console.log("pokemonURL", pokemonURL);
    console.log("pokeAPIResponse", pokeAPIResponse);

    if (pokeAPIResponse.status == 200) {
        const pokeData = await pokeAPIResponse.json();
        console.log("pokeData", pokeData);

        return pokeData;

    } else {
        let fakePokeData = getMissingNo();
        console.log("fakePokeData", fakePokeData);
        hidePokeSeparator();

        return fakePokeData;
    };
}

// fetchPokemon(222); (i love you Corsola <3)

const renderPokemon = async (pokemon) => {
    loadingPokeDataFetch();

    let pokeDataFetched = await fetchPokemon(pokemon);
    console.log("pokeDataFetched", pokeDataFetched);

    pokeNameRender(pokeDataFetched);
    pokeIdRender(pokeDataFetched);
    pokeImgGifRender(pokeDataFetched);
    showPokeSeparator();
}

// Render first pokémon <3 luv ya bulbasaurO, but char >>>>>>> is better
// renderPokemon(1);
renderPokemon("Bulbasaur");

const pokeForm = (event) => {
    event.preventDefault();
    let pokeInputValue = pokemonInputDOM.value;

    renderPokemon(pokeInputValue);
    resetPokeInput();

    console.log("Poké Form!!!");
    // console.log("pokeInputValue", pokemonInputDOM.value);
    console.log("pokeInputValue", pokeInputValue);
}

pokemonFormDOM.addEventListener("submit", pokeForm);