module.exports = {
  name: "shuffle-guess",
  aliases: ["guess"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..shuffle-guess',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    var randomWords = require('random-words');
    const word = randomWords()
    const { ShuffleGuess } = require('weky')
const game = new ShuffleGuess({
    message: message,
    word: word,
    winMessage: "GG you won!",
})
game.start()
}
}