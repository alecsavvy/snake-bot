const lyrics = [
  "There are places I'll remember",
  "All my life though some have changed",
  "Some forever, not for better",
  "Some have gone and some remain",
  "All these places have their moments",
  "With lovers and friends I still can recall",
  "Some are dead and some are living",
  "In my life I've loved them all",
  "But of all these friends and lovers",
  "There is no one compares with you",
  "And these memories lose their meaning",
  "When I think of love as something new",
  "Though I know I'll never lose affection",
  "For people and things that went before",
  "I know I'll often stop and think about them",
  "In my life I love you more",
  "Though I know I'll never lose affection",
  "For people and things that went before",
  "I know I'll often stop and think about them",
  "In my life I love you more",
  "In my life I love you more",
];

module.exports = (client, channel, message) => {
  const index = lyrics.findIndex((line) => {
    return line.toLowerCase() === message.toLowerCase();
  });

  if (index >= 0) {
    client.say(channel, `🎶 ${lyrics[index + 1]} 🎶`);
  }
};
