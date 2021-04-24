module.exports = (client, channel, message) => {
  if (message.toLowerCase().startsWith("!socials")) {
    shareSocials(client, channel);
  }

  if (message.toLowerCase().startsWith("!spoiler") && tags.username.toLowerCase() === "lemonadejetpack") {
    // "@alca, heya!"
    client.say(channel, "Help get snake a new spoiler! Donate here! https://streamlabs.com/the_dirty_snake/tip");
  }
};

const shareSocials = (client, channel) => {
  client.say(
    channel,
    "Miss a stream? Watch me slither on Youtube! https://www.youtube.com/channel/UCH52b4xG4sxhw7AvwCvj9mA"
  );
};
