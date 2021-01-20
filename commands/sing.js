module.exports = (client, channel, message) => {
  const index = songs.findIndex((line) => {
    return line.toLowerCase() === message.toLowerCase();
  });

  if (index >= 0) {
    let line = songs[index + 1];
    if (line === "say baby") { line = line.toUpperCase(); }
    client.say(channel, `🎶 ${line} 🎶`);
  }
};

// i have no persistence layer
// array of arrays for organization
// https://codepen.io/franciskim/pen/eNjrpR
const lyrics = [
  ["Well I remember as it were a meal ago","Said Tommy the Cat as he reeled back to clear whatever foreign matter","May have nestled its way into his mighty throat.","Many a fat alley rat had met its demise while staring point blank down","The cavernous barrel of this awesome prowling machine.","Truly a wonder of nature this urban predator.","Tommy the cat had many a story to tell,","But it was a rare occasion such as this that he did.","She came slidin' down the alleyway like butter drippin' off a hot biscuit.","The aroma, the mean scent, was enough to arouse suspicion in even the","Oldest of Tigers that hung around the hot spot in those days.","The sight was beyond belief.","Many a head snapped for double - even triple - takes as this vivacious","Feline made her her way into the delta of the alleyway where the most","Virile of the young tabbys were known to hang out.","They hung in droves. Such a multitude of masculinity could only be","Found in one place...","And that was O'malley's Alley.","The air was thick with cat calls (no pun intended),","But not even a muscle in her neck did twitch as she sauntered up into","The heart of the alleyway.","She knew what she wanted.","She was lookin' for that stud bull, she was looking for that he cat.","And that was me.","Tommy the Cat is my name and I say unto thee...","Say baby do you want to lay down with me","Say baby do you want to lay down by my side","Ah baby do you want to lay down with me","Say baby", "say baby"],
  [
    // in my life, the beatles
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
  ],
  [
    // diary of jane, breaking benjamin
    "If I had to",
    "I would put myself right beside you",
    "So let me ask, would you like that?",
    "Would you like that?",
    "And I don't mind",
    "If you say this love is the last time",
    "So now I'll ask, do you like that?",
    "Do you like that? No!",
    "Something's getting in the way",
    "Something's just about to break",
    "I will try to find my place",
    "In the diary of Jane",
    "So tell me how it should be",
    "Try to find out",
    "What makes you tick, as I lie down",
    "Sore and sick, do you like that?",
    "Do you like that?",
    "There's a fine line",
    "Between love and hate and I don't mind",
    "Just let me say that I like that",
    "I like that",
    "Something's getting in the way",
    "Something's just about to break",
    "I will try to find my place",
    "In the diary of Jane",
    "As I burn another page",
    "As I look the other way",
    "I still try to find my place",
    "In the diary of Jane",
    "So tell me how it should be",
    "Desperate I will crawl",
    "Waiting for so long, no love",
    "There's no love",
    "Die for anyone",
    "What have I become?",
    "Something's getting in the way",
    "Something's just about to break",
    "I will try to find my place",
    "In the diary of Jane",
    "As I burn another page",
    "As I look the other way",
    "I still try to find my place",
    "In the diary of Jane",
  ],
  [
    // outlaw heart, tiger army
    "Desert nights under lonely stars",
    "Cruising down a highway takes me farther from home",
    "Whiskey and regret",
    "Neither can erase the fact that I have done wrong",
    "So now I'm on the run",
    "The law is on my trail",
    "Let down the only girl that ever seemed to be the one for me",
    "So now I wander alone",
    "Alone in a cheap motel room",
    "Praying to The Lord above",
    "Burden of the past rests so heavy on my shoulders",
    "My conscience carries the weight of blood",
    "Cigarette smoke and shadow",
    "A neon cactus in the night",
    "Did what I did cause I thought that I had no choice",
    "But there's always another way",
    "I look to the moon and stars",
    "Somewhere underneath them she's there",
    "Never even spoke to her the words of love I held in my heart",
    "If she heard them now, would she still care?",
    "Wonder if she's thinking of me",
    "Does she hate me for what I've done",
    "How I wish that I could change everything and go back",
    "Now that my last chance is gone, it's gone",
    "Moon, will you tell her for me",
    "I'm sorry for all the trouble that I've caused",
    "If only I could find a way to return to her someday",
    "For I long to hold her in my arms",
    "But I fear that I'm not for this world",
    "Because I will not go out without a fight",
    "I'm running forever, if they should catch me",
    "One last thought of her before my gun is fired",
  ],
];

const removePunctuation = (line) => {
  return line
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, " ")
    .toLowerCase();
};

// flatten for search
const songs = lyrics.flat().map(removePunctuation);
