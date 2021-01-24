const axios = require("axios");

module.exports = (client, channel, tags, message) => {
    if (message.toLowerCase().startsWith("!stonks")) {
        const symbol = message.split(" ")[1].toUpperCase();
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.STONKS_API_KEY}`).then(res => {
            const quote = res.data["Global Quote"];
            const price = quote["05. price"];
            const changePercent = quote["10. change percent"];
            const change = changePercent[0] === "-" ? `down ${changePercent.substring(1, changePercent.length - 1)}` : `up ${changePercent.substring(1, changePercent.length - 1)}`;
            const reply = `${symbol} priced at ${price} USD, ${change} percent`;
            client.say(channel, `${tags.username} ${reply}`);
        })
    }
}