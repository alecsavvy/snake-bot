const axios = require("axios");

module.exports = (client, channel, pokeCache, pokeSearch) => {
    findPokemon(client, channel, pokeCache, pokeSearch);
}

const findPokemon = (client, channel, pokeCache, pokeSearch) => {
    if (pokeSearch.inProgress || pokeCache.length === 0) { return; }
    const timeout = 40000;
    const halfTimeout = timeout / 2;
    client.say(channel, "A wild pokemon is among us! What could it be?");
    pokeSearch.inProgress = true;
    const pokemon = pokeCache[Math.floor(Math.random() * pokeCache.length)];
    pokeSearch.name = pokemon.name;
    setTimeout(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeSearch.name}`)
            .then((response) => {
                let moves = response.data.moves;
                let move = moves[Math.floor(Math.random() * moves.length)];
                let moveName = move.move.name;
                client.say(channel, `the pokemon used ${moveName}!`);
                pokeSearch.hintUsed = true;
            })
            .catch(console.log);
    }, halfTimeout);
    setTimeout(() => {
        client.say(channel, `the pokemon is... ${pokemon.name}!`);
        pokeSearch.inProgress = false;
        pokeSearch.name = false;
        pokeSearch.hintUsed = false;
    }, timeout);
}