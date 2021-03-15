const Discord = require('discord.js');
const Canvas = require('canvas');
const { MessageEmbed } = require("discord.js")

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
    const fetch = require('node-fetch')
    var randomWords = require('random-words');
    const word = randomWords()
    const res = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${word}&key=scNyfoysHunZd79reAL5VEsQV`))).json();
    await message.channel.send(`I shuffled a word, it is \`${res.result}\`\nOptions: \`cancel\`,\`reshuffle\``)
      const gameFilter = m => m.author.id
      const gameCollector = message.channel.createMessageCollector(gameFilter);
  
      gameCollector.on('collect', async msg => {
        if(msg.author.bot) return
            const selection = msg.content.toLowerCase();
if (selection === word) {
message.reply(`GG! It was \`${word}\``)
gameCollector.stop()
            } else if (selection === 'cancel') {
              message.channel.send(`Successfully stopped the game.`)
              gameCollector.stop();
            } else if(selection === 'reshuffle'){
              const ress = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${word}&key=scNyfoysHunZd79reAL5VEsQV`))).json();
              message.channel.send(`I reflushed , it is \`${ress.result}\`\nOptions: \`cancel\`,\`reshuffle\``)
            } else if (selection !== word) {
              message.reply(`Wrong\nOptions: \`cancel\`,\`reshuffle\``)
            }
      });
    console.log(word)
}
}