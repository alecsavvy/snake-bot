module.exports = (client, channel, tags, message) => {
    if (message.toLowerCase().endsWith("rk") && message.toLowerCase().startsWith("!")) {
      const verb = message.substring(1);
      client.say(channel, `@${tags.username} thanks for ${verb}ing! 👻`);
    }
  };
  