const state = {};

module.exports = (client, channel, message) => {
  if (message.toLowerCase().startsWith("!rip")) {
    on_rip(client, channel, message);
  }

  if (message.toLowerCase().startsWith("!deaths")) {
    on_death_count(client, channel, message);
  }
};

const on_rip = (client, channel, message) => {
  console.log("rip");
  const msg = message.split(" ")[1];
  const name = msg.toLowerCase();
  const times = add_death(name);
  if (times === 1) {
    client.say(channel, `it was ${name}'s first death! Hooray!`);
    return;
  }
  client.say(channel, `${name} has died ${times} times so far!`);
};

const on_death_count = (client, channel, message) => {
  const msg = message.split(" ")[1];
  const name = msg.toLowerCase();
  if (!state[name]) {
    client.say(channel, `${name}? never met her`);
    return;
  }
  const times = state[name];
  if (times === 1) {
    client.say(channel, `${name} has departed this life ${times} time so far!`);
    return;
  }
  client.say(channel, `${name} has departed this life ${times} times so far!`);
};

const add_death = (name) => {
  if (!state[name]) {
    state[name] = 1;
  } else {
    const old_count = state[name];
    state[name] = old_count + 1;
  }

  return state[name];
};
