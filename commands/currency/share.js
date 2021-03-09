const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "share",
  aliases: ["pay", "give"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..share @user amount',
  cooldown: 15, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(`You didnt said who i need to give :rolling_eyes:`)
    var num = parseFloat(args[1])
    if(!num) return message.channel.send(`How many coins you want to give?`)
    if (num.isNaN) return message.channel.send("Thats not a valid number");
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
  } else if(num > data.Wallet) {
    return message.channel.send("You dont have these money.");
  } else {
   data.Wallet -= num;
   data.save();
   const e = data.Wallet
   Money.findOne({
    id: member.id
  }, (err,data) => {
    if(err) console.log(err);
    if(!data){
      newD = new Money({
        id: member.id
      });
      newD.save();
    } else {
     data.Wallet += num;
     data.save()
  

   message.channel.send(`<@`+message.author + `> gave ${member.username} **${num}** coins, you have now ${e} and they have ${data.Wallet}`)
    }
  });
  }
});
         
  }
}