const axios = require("axios");

module.exports = (client, channel, tags, message, pokeCache, pokeSearch) => {
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
    client.say(channel, "FORD RANGER");
  }

  if (message.toLowerCase().includes("i aint no stranger")) {
    client.say(channel, "THATS A FORD FUCKIN RANGER");
  };

  if (message.toLowerCase().includes("whos that pokemon?")) {
    findPokemon(client, channel, pokeCache, pokeSearch);
  }

  if (message.toLowerCase().includes("who's that pokemon?")) {
    findPokemon(client, channel, pokeCache, pokeSearch);
  }

  if (message.toLowerCase().startsWith("!hint")) {
    if (!pokeSearch.inProgress || pokeSearch.hintUsed) {
      return;
    }
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeSearch.name}`)
      .then((response) => {
        let type = response.data.types[0].type.name;
        client.say(channel, `the pokemon appears to be of the ${type} type`);
        pokeSearch.hintUsed = true;
      })
      .catch(console.log);
  }
};

const findPokemon = (client, channel, pokeCache, pokeSearch) => {
  if (pokeSearch.inProgress) { return; }
  const timeout = 35000;
  client.say(channel, "will reveal the pokemon in 35 seconds!");
  pokeSearch.inProgress = true;
  const pokemon = pokeCache[Math.floor(Math.random() * pokeCache.length)];
  pokeSearch.name = pokemon.name;
  setTimeout(() => {
    client.say(channel, `the pokemon is... ${pokemon.name}!`);
    pokeSearch.inProgress = false;
    pokeSearch.name = false;
    pokeSearch.hintUsed = false;
  }, timeout);
}
