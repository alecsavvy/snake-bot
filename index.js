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

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  // Ignore banned users
  if (bannedChannels.includes(tags.username.toLowerCase())) return;

  // register commands
  commands.yee(client, channel, tags, message);
  commands.rip(client, channel, message);
  commands.slither(client, channel, message);
  commands.ban(client, channel, message);
  commands.sing(client, channel, message);
  commands.socials(client, channel, message);
  commands.lurk(client,channel, tags, message);
  commands.test(client,channel, tags, message);
  (async () => {
    await commands.pokedex(client, channel, message).catch((e) => {
      console.log(e);
      client.say(channel, `@${tags.username} guess we haven't caught them all!`)
    });
  })();
});
