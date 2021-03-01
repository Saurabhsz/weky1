const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 60 more seconds`)
    .setDescription(`Dont you dare to frikin tryna break me, please wait \`60s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    const Money = require('../schemas/Money')
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
   let random = Math.floor(Math.random() * 500) + 400
   let r = Math.floor(Math.random() * 10)
  if(r == '0'){
    data.Wallet += random;  
    data.laptop += 1;
    data.save();
    message.channel.send(`<:Pog:812974566958956554> Poggers are cool, i will give you ${random} coins and <:laptop:814147340947554314> 1 Laptop`)
  } else { 
    message.channel.send(`<:sadchamp:812974625700839454> PogChamp better, im taking away ${data.Wallet} from you`)
      data.Wallet -= data.Wallet
      data.save();
  }
   
}
});
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 60000);
         
  }
  module.exports.config = {
    name: "pog",
    aliases: ["poggers"]
}