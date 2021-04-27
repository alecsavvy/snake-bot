const tmi = require("tmi.js");
const commands = require("./commands");
const revolvers = require("./revolvers");

const axios = require("axios");

// config
require("dotenv").config();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const channels = process.env.CHANNELS.trim().split(",");
const bannedChannels = process.env.BANNED_CHANNELS.trim().split(",");

// initialize client
const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username,
    password,
  },
  channels,
});

client.connect();

// insert interval messages here
let pokeCache = [];

// state object for searches
let pokeSearch = {
  inProgress: false, // true if a pokemon is already being guessed at
  name: false,
  hintUsed: false,
}

axios
  .get("https://pokeapi.co/api/v2/generation/1/")
  .then((response) => {
    // initialize places in mem
    pokeCache = response.data.pokemon_species;
    console.log("got pokemon")
  })
  .catch(console.log);


client.on("message", async (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  // Ignore banned users
  if (bannedChannels.includes(tags.username.toLowerCase())) return;

  // register commands
  commands.yee(client, channel, tags, message);
  commands.rip(client, channel, message);
  commands.slither(client, channel, message);
  commands.ban(client, channel, tags, message);
  commands.sing(client, channel, message);
  commands.socials(client, channel, message);
  commands.lurk(client, channel, tags, message);
  commands.test(client, channel, tags, message, bannedChannels);
  commands.stonks(client, channel, tags, message);
  commands.friends(client, channel, tags, message, pokeCache, pokeSearch);
  commands.advice(client, channel, tags, message);

  // await commands.pokedex(client, channel, message).catch(console.error);
});

client.on("cheer", (channel, userstate, message) => {
  if (userstate.username.toLocaleLowerCase() === "irishluck1441") {
    client.say(channel, `@lemonadejetpack BAN HAMMER BOP BOP BOP`);
  }
})

channels.forEach((channel) => {
  revolvers.plugs(600000, client, channel);
  setInterval(() => {
    revolvers.pokemon(client, channel, pokeCache, pokeSearch);
  }, 900000);
})
