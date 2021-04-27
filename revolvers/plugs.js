module.exports = (interval, client, channel) => {
    setInterval(() => plug(client, channel), interval);
}

let plugs = [
    "If you're enjoying your time in the snake pit, be sure to follow and/or subscribe to support the stream! 🐍",
    "Help get snake a new spoiler! Donate here! https://streamlabs.com/the_dirty_snake/tip",
    "Miss a stream? Watch me slither on Youtube! https://www.youtube.com/channel/UCH52b4xG4sxhw7AvwCvj9mA",
]

const plug = (client, channel) => {
    let msg = plugs.shift();
    client.say(channel, msg);
    plugs.push(msg);
}