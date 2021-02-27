const Discord = require('discord.js');
const talkedRecently = new Set();

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first();
  if(!member) return message.channel.send(`Who you want to give the items lol`)
  if (talkedRecently.has(message.author.id)) {
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Wait 5 more seconds`)
    .setDescription(`Dont you dare to frikin tryna break me, please wait \`10s\` to use this command again idot :D`)
    .setFooter(`This timer dont update in real time`)
    message.channel.send(embed);
} else {
    var num = parseFloat(args[2])
    if(!num) return message.channel.send(`How many coins you want to give?`)
    if (num.isNaN) return message.channel.send("Thats not a valid number");
    const Money = require('../schemas/Money')
    if(!args[1]) return message.channel.send(`You forgot to say what item you want to give.`)
    if(!args[2]) return message.channel.send(`You didnt said how much ${args[1]} you want to give.`)
    if(!args[1] === 'wekyripoff' || !args[1] === 'laptop' || !args[1] === 'wekyrip' || !args[1] === 'wekymoon' || !args[1] === 'spacescript' || !args[1] === 'script') {
      return mesage.reply(`This item isnt even in this bot wha-`)
    }
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
  } else if(args[2] > data.args[1]) {
    return message.channel.send(`You dont have ${args[2]} ${args[1]}.`);
  } else {
   data.args[1] -= num;
   data.save();
   message.channel.send(`You gave ${member} ${args[2]} **${args[1]}**, you have now ${data.args[1]}`)
}
});
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
     data.args[1] += num;
     data.save()
  }
  });
}
talkedRecently.add(message.author.id);
                setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 10000);
         
  }
  module.exports.config = {
    name: "give",
    description: "give your items to ur friends!",
    usage: "/give (amount) (item)",
    accessableby: "Members",
    aliases: []
}