module.exports = (client, channel, tags, message) => {
    if (message.toLowerCase().startsWith("!test") && tags.username.toLowerCase() === "lemonadejetpack") {
      // "@alca, heya!"
      client.say(channel, "line... break");
    }
  };
  