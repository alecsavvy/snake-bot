const axios = require("axios");

module.exports = (client, channel, tags, message) => {
  if (message.toLowerCase().startsWith("!snowflake")) {
    client.say(channel, "oh look! @pgraci is here! ❄️");
  }

  if (message.toLowerCase().startsWith("!kinkieslinkie")) {
    client.say(channel, "oh no no no ;)");
  }

  if (message.toLowerCase().startsWith("!ninetoedbandit")) {
    client.say(channel, "Name: Ninetoed Bandit, Height: 5'7 w/o brace, Special Move: Sliding Dragon, Hidden Foot");
  }

  if (message.toLowerCase().includes("i know that truck")) {
    client.say(channel, "FORD FUCKIN RANGER");
  }

  if (message.toLowerCase().includes("i aint no stranger")) {
    client.say(channel, "THATS A FORD FUCKIN RANGER");
  };

  if (message.toLowerCase().includes("whos that pokemon?")) {
    findPokemon(client, channel, tags, message);
  }

  if (message.toLowerCase().includes("who's that pokemon?")) {
    findPokemon(client, channel, tags, message);
  }
};

let pokeCache = [];

// state object for searches
let pokeSearch = {
	inProgress: false, // true if a pokemon is already being guessed at
	name: false,
}

// get all countries from API, only called once
axios
  .get("https://pokeapi.co/api/v2/generation/1/")
  .then((response) => {
    // initialize places in mem
    pokeCache = response.data.pokemon_species;
  })
  .catch(console.log);

const findPokemon = (client, channel, tags, message) => {
  if (pokeSearch.inProgress) { return; }
  const timeout = 20000;
  client.say(channel, "will reveal the pokemon in 20 seconds!");
  pokeSearch.inProgress = true;
  const pokemon = pokeCache[Math.floor(Math.random() * pokeCache.length)];
  pokeSearch.name = pokemon.name;
  setTimeout(() => {
    client.say(channel, `the pokemon is... ${pokemon.name}!`);
	pokeSearch.inProgress = false;
	pokeSearch.name = false;
  }, timeout);
}
