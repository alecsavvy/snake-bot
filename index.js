const tmi = require("tmi.js");
const commands = require("./commands");

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
  commands.test(client, channel, tags, message);

  await commands.pokedex(client, channel, message).catch(console.error);
});
