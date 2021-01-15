module.exports = (client, channel, message) => {
  if (message.toLowerCase().startsWith("!ban")) {
    on_ban(client, channel, message);
  }
};

const on_ban = (client, channel, message) => {
  const msg = message.split(" ")[1];
  const name = msg.toLowerCase();
  client.say(channel, `${name} has been banned for the forseeable future`);
};
