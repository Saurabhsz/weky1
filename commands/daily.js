const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports.run = async (bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 22 more hours`)
    .setDescription(`Dont you dare to frikin tryna break me, please wait \`22h\` to use this command again idot :D`)
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
  }
   data.Wallet += 1400;
   data.save();
   message.channel.send("You collected your daily 1400 coins, nice")
})
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 86400000);
         
  }
  module.exports.config = {
    name: "daily",
    description: "getting money daily is cool",
    usage: "/daily",
    accessableby: "Members",
    aliases: []
}