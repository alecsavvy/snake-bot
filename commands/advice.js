const axios = require("axios");

module.exports = async (client, channel, tags, message) => {
  if (message.toLowerCase().startsWith("!advice")) {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      const advice = res.data.slip.advice;
      client.say(channel, `@${tags.username} ${advice}`);
    });
  }
};
