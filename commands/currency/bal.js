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
    let embed = new Discord.MessageEmbed()
    .setTitle(target.username + '\'s balance')
    .setDescription("**Wallet**: " + bot.bal(target.id) + "\n**Bank**: " + bot.Bank(target.id) + "/" + bot.space(target.id) + `\n**Total**: ${bot.bal(target.id)+bot.Bank(target.id)}`)
    .setColor("RANDOM")
    .setTimestamp();
    message.channel.send(embed);
  }}