const Discord = require('discord.js')
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {

  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 6 more seconds`)
    .setDescription(`😡 Dont you dare to frikin tryna break me, please wait \`6s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../../schemas/Money')
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
   const ok = [
       `tails`,
       `heads`
   ]
   var num = Math.floor(Math.random() * ok.length);
if(num != 1) {

  data.Wallet -= number;    
  let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
  .setDescription(`**You lost!**\n
                   Lost: ${number}\n
                   **New balance: ${data.Wallet}**`)
  .setColor(`RED`)
  .setFooter(`Loser`)
message.channel.send(embed)
  data.save(); 
} else if (num != 0){
    data.Wallet += number*2;
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
    .setDescription(`**You won!**\n
                     Gambled: ${number}; Won: ${number*2}\n
                     **New balance: ${data.Wallet}**`)
    .setColor(`GREEN`)
    .setFooter(`Winner`)
  message.channel.send(embed)
  data.save()
}
}
});
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 6000);
         
}
  module.exports.config = {
    name: "bet",
    usage: "/bet",
    accessableby: "Members",
    aliases: ["gamble"]
}