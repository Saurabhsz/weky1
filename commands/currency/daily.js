const Discord = require('discord.js');
module.exports.config = {
  name: "daily",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..daily',
  cooldown: 86400, //seconds(s)
  cooldowny: 86400,
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
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else {
   data.Wallet += 1400;
   data.save();
   message.channel.send("You collected your daily 1400 coins, nice")
  }
  })
}
}