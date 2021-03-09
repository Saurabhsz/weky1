const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "with",
  aliases: ["withdraw"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..with amount',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

    var num = parseFloat(args[1])
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
    if(args[1] === 'all') {

      data.Wallet += data.Bank
      message.reply("Withdrawn **" + data.Bank + '** coins.')
      data.Bank -= data.Bank
      data.save()
    } else if(args[1] === 'half'){
              data.Wallet += data.Bank/2
              message.reply("Withdrawn **" + data.Bank/2 + '** coins.')
              data.Bank -= data.Bank/2
              data.save()
              } else if(num){
    data.Wallet += num;
   data.Bank -= num;
   data.save();
   message.reply("Withdrawn **" + num + '** coins.')
      } else {
        return message.reply("Thats not a valid number");
      }
}
});
}
}