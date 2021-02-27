const Discord = require('discord.js')
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 3 more seconds`)
    .setDescription(`😡 Dont you dare to frikin tryna break me, please wait \`3s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../schemas/Money')
    const rndom = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
      const hance = rndom > 0 && rndom < 70; // the conidtion which is the chance
      if(message.content.includes('.') || message.content.includes(',')) return message.channel.send(`In your message CAN'T be . and ,`)

    var number = parseFloat(args[1])
    if(!number) return message.channel.send(`Please specify how much you want to bet!`)
    if (number.isNaN) return message.channel.send("Thats not a valid number");
Money.findOne({
  id: targetId
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: targetId
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else {
    if(number > data.Wallet) {
        return message.channel.send("You dont have that much money why you bad at me bro :/");
    }
    if(number < 100){
      return message.channel.send("You can gamble only 100 above coins")
  }
  if(number > 500000){
      return message.channel.send(`You can't gamble more than 500,000 coins.`)
  }

  if (hance) {
    data.Wallet -= number;    
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
    .addField(`**You lost!**`,
                     `Lost: ${number}`,
                     `**New balance: ${data.Wallet}**`)
    .setColor(`RED`)
    .setFooter(`Loser`)
  message.channel.send(embed)
    data.save(); 
  } else {
    const arrray = [
      "0.1",
      "0.2",
      "0.3",
      "0.4",
      "0.5",
      "0.9",
      "1.0",
      "1.1",
      "1.2",
      "1.3",
      "1.4",
      "1.5",
    "1.6",
    "1.7",
    "1.8",
    "1.9",
    "2"]
    const r = Math.floor(Math.random() * arrray.length);
    data.Wallet += number*r;
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                       `Gambled: ${number}; Won: ${number*r}; Multi: x${r}`,
                       `**New balance: ${data.Wallet}**`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
  }
  }
});

talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 3000);
              }
              }
  module.exports.config = {
    name: "bet",
    usage: "/bet",
    accessableby: "Members",
    aliases: ["gamble"]
}