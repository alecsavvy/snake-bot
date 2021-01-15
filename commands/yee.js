module.exports = (client, channel, tags, message) => {
  if (message.toLowerCase().startsWith("!ye")) {
    // "@alca, heya!"
    client.say(channel, `@${tags.username} HAW! 🤠`);
  }
};
