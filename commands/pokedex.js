const img2ascii = require("image-to-ascii");
const axios = require("axios");

module.exports = (client, channel, message) => {
  if (message.toLowerCase().startsWith("!pokedex")) {
    // parse first word as pokemon name, ignore the rest
    const pokemonName = message.split(" ")[1].toLowerCase();
    console.log(pokemonName);

    // hit poke api
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        // parse response for image
        const pokemon = response.data.sprites;
        const pokemonImage = pokemon.front_default;
        console.log(pokemonImage);

        const options = {
          colored: false,
          stringify: true,
          size: {
            height: 10,
            width: 10,
          },
        };

        img2ascii(pokemonImage, options, (err, result) => {
          const img = [...result]
            .map((char) => (char === "@" ? "." : char))
            .join("");
          client.say(channel, img);
        });
      })
      .catch(console.log);
  }
};
