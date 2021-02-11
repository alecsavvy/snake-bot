module.exports = (client, channel, tags, message) => {
    if (message.toLowerCase().startsWith("!test") && tags.username.toLowerCase() === "lemonadejetpack") {
      // "@alca, heya!"
      client.say(channel, "line... break");
    }

    if (message.toLowerCase().startsWith("!spoiler") && tags.username.toLowerCase() === "lemonadejetpack") {
      // "@alca, heya!"
      client.say(channel, "Help get snake a new spoiler! Donate here! https://streamlabs.com/the_dirty_snake/tip");
    }
  };
  