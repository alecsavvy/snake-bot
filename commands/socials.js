module.exports = (client, channel, message) => {
  if (message.toLowerCase().startsWith("!socials")) {
    shareSocials(client, channel);
  }
};

const shareSocials = (client, channel) => {
  client.say(
    channel,
    "Miss a stream? Watch me slither on Youtube! https://www.youtube.com/channel/UCH52b4xG4sxhw7AvwCvj9mA"
  );
};
