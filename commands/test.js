module.exports = (client, channel, tags, message, bannedChannels) => {
  if (message.toLowerCase().startsWith("!ignore") && tags.username.toLowerCase() === "lemonadejetpack") {
    const name = message.split(" ")[1];
    bannedChannels.push(name);
  }
};
