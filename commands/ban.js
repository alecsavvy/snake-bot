module.exports = (client, channel, tags, message) => {
  if (message.toLowerCase().startsWith("!ban")) {
    on_ban(client, channel, tags, message);
  }

  if (message.toLowerCase().startsWith("!snowflake")) {
    client.say(channel, "oh look! @pgraci is here! ❄️")
  }

  if (message.toLowerCase().startsWith("!roland")) {
    client.say(channel, "@roland_gunslinger1991 pew pew 💥")
  }

  if (message.toLowerCase().includes("unit")) {
    client.say(channel, `${tags.username} suck my unit`);
  }
};

const on_ban = (client, channel, tags, message) => {
  const msg = message.split(" ")[1];
  const name = msg.toLowerCase();
  if (name === "me") {
    client.say(channel, `@${tags.username} BAN HAMMER BOP BOP BOP`);
    return;
  }
  client.say(channel, `@${name} BAN HAMMER BOP BOP BOP`);
};
