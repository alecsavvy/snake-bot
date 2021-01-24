module.exports = (client, channel, tags, message) => {
  if (message.toLowerCase().startsWith("!snowflake")) {
    client.say(channel, "oh look! @pgraci is here! ❄️");
  }

  if (message.toLowerCase().startsWith("!roland")) {
    client.say(channel, "@roland_gunslinger1991 pew pew 💥");
  }
};
