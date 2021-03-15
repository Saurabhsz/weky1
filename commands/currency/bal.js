const Discord = require('discord.js')
module.exports = {
  name: "bal",
  aliases: ["balance"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..balance',
  cooldown: 3, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../../schemas/Money')
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
    let embed = new Discord.MessageEmbed()
    .setTitle(target.username + '\'s balance')
    .setDescription("**Wallet**: " + data.Wallet + "\n**Bank**: " + data.Bank + "/" + data.space + `\n**Total**: ${data.Bank+data.Wallet}`)
    .setColor("RANDOM")
    .setTimestamp();
    message.channel.send(embed);
  }
});
  }}