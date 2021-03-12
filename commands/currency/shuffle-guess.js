const Discord = require('discord.js');
const Canvas = require('canvas');
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "shuffle-guess",
  aliases: ["guess"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..shuffle-guess',
  cooldown: 60, //seconds(s)
  cooldowny: 50,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const Money = require('../../schemas/Money')
    Money.findOne({
      id: message.author.id
    }, (err,data) => {
      if(err) console.log(err);
      if(!data){
        newD = new Money({
          id: message.author.id
        });
        newD.save();
        let user1 = message.guild.members.cache.get(message.author.id);
        user1.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
      } else {
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
message.reply(`GG! It was \`${word}\`, you got <:spacescript:814122006437167134> 2 Space Scripts`)
data.banknote += 2
data.save()
gameCollector.stop()
            } else if (selection === 'cancel') {
              message.channel.send(`Successfully stopped the game.`)
              gameCollector.stop();
            } else if(selection === 'reshuffle'){
              const ress = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${word}&key=scNyfoysHunZd79reAL5VEsQV`))).json();
              message.channel.send(`I reflushed but u lost 100 bank space, it is \`${ress.result}\`\nOptions: \`cancel\`,\`reshuffle\``)
            data.space -= 100
            data.save()
            } else if (selection !== word) {
              message.reply(`Wrong, lost 10 coins\nOptions: \`cancel\`,\`reshuffle\``)
              data.Wallet -= 10
              data.save()
            }
      });
    console.log(word)
      }
    })
}
}