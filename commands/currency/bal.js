const Discord = require('discord.js')
module.exports = {
  name: "bal",
  aliases: ["balance"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..balance',
  cooldown: 3, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    let embed = new Discord.MessageEmbed()
    .setTitle(target.tag + '\'s balance')
    .setDescription("**Wallet**: " + await bot.bal(target.id) + "\n**Bank**: " + await bot.Bank(target.id) + "/" + await bot.space(target.id))
    .setColor("RANDOM")
    .setTimestamp();
    message.channel.send(embed);
  }}