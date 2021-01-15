const axios = require("axios");

// state variables
let places = [];
let currentPlace = "his house";

// get all countries from API, only called once
axios
  .get("https://restcountries.eu/rest/v2/all")
  .then((response) => {
    // initialize places in mem
    places = response.data;
  })
  .catch(console.log);

module.exports = (client, channel, message) => {
  if (message.toLowerCase() === "!slither") {
    // get random location from list
    const place = places[Math.floor(Math.random() * places.length)].name;
    currentPlace = place;
    client.say(channel, `The dirty snake has slithered to ${currentPlace}!`);
  }

  if (message.toLowerCase() === "!where") {
    client.say(channel, `The dirty snake is in ${currentPlace}.`);
  }
};
