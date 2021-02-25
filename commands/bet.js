const Discord = require('discord.js')
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 45 more seconds`)
    .setDescription(`😡 Dont you dare to frikin tryna break me, please wait \`45s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../schemas/Money')
    const rndom = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
      const chace = rndom > 0 && rndom < 60; // the conidtion which is the chance
      const hance = rndom > 0 && rndom < 40; // the conidtion which is the chance

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
   const random = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
const chance = random > 0 && random < 50; // the conidtion which is the chance
if(data.wekymoon > 0){
  if (chance) {
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
    data.Wallet += number*2.4;
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                       `Gambled: ${number}; Won: ${number*2.4}; Multi: x2.4`,
                       `**New balance: ${data.Wallet}**`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
  }
} else if (chace) {
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
} else if(data.wekymoon < 0){

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
    data.Wallet += number*2;
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                       `Gambled: ${number}; Won: ${number*2}; Multi: x2.0`,
                       `**New balance: ${data.Wallet}**`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
  }
} else if(data.wekyripoff > 0){
  const random = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
  const cance = random > 0 && random < 60; // the conidtion which is the chance
  if (cance) {
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
    data.Wallet += number*2.6;
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                       `Gambled: ${number}; Won: ${number*2.6}; Multi: x2.6`,
                       `**New balance: ${data.Wallet}**`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
  }
} else if (chance) {
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