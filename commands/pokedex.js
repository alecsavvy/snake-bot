// const { braillefy } = require('img2braille');

// module.exports = async (client, channel, message) => {
//   if (message.toLowerCase().startsWith("!pokedex")) {
//     // parse first word as pokemon name, ignore the rest
//     const pokemonName = message.split(" ")[1].toLowerCase();
//     const pokemonImage = `https://img.pokemondb.net/artwork/large/${pokemonName}.jpg`;

//     const asciiOpts = { monospace: true };

//     const result = await braillefy(pokemonImage, 30, asciiOpts);

//     client.say(channel, result.substring(0, 500));
//   }
// };
