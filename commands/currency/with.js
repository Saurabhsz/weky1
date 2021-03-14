const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "with",
  aliases: ["withdraw"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..with amount',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

    var num = parseFloat(args[0])
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
  } else if(num > data.Bank) {
    return message.reply("You dont have that much money why you bad at me bro :/");
  
  } else {
    if(args[0] === 'all') {
if(data.space < Math.round(data.Wallet)) return message.channel.send(`You bank is full, get some space scripts`)
      data.Wallet += Math.round(data.Bank)
      message.reply("Withdrawn **" +  Math.round(data.Bank) + '** coins.')
      data.Bank -= Math.round(data.Bank)
      data.save()
    } else if(args[0] === 'half'){
      if(data.space <  Math.round(data.Wallet/2)) return message.channel.send(`You bank is full, get some space scripts`)
              data.Wallet +=  Math.round(data.Bank/2)
              message.reply("Withdrawn **" +  Math.round(data.Bank/2) + '** coins.')
              data.Bank -=  Math.round(data.Bank/2)
              data.save()
              } else if(num.isNaN){
return message.channel.send(`You cannot deposit ${args[0]} damn.`)
      } else {
        data.Wallet += Math.round(num)
        data.Bank -= Math.round(num)
        data.save();
        message.reply("Withdrawn **" + Math.round(num) + '** coins.')
      }
}
});
}
}