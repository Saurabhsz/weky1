const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "share",
  aliases: ["pay", "give"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..share @user amount',
  cooldown: 15, //seconds(s)
  cooldowny: 5,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])
if(!member) return message.channel.send(`Use this blocked head :rolling_eyes:\n\`..share @mymom [number]\``)
    var num = Math.round(parseFloat(args[1]))
    if(!num) return message.channel.send(`Use this blocked head :rolling_eyes:\n\`..share @mymom [number]\``)
  if(args[1] === 'all' && isNaN(num)){
    bot.rmv(message.author.id, await bot.bal(message.author.id))
    bot.add(member.id, await bot.bal(message.author.id))
    message.channel.send(`<@`+message.author + `> gave ${member.user.tag} **${num}** coins, you have now ${await bot.bal(message.author.id)} and they have ${await bot.bal(member.id)}`)
  } else if (isNaN(num) && args[1] !== 'all') {
    return message.channel.send(`Use this blocked head :rolling_eyes:\n\`..share @mymom [number]\``)
  } else {
    bot.rmv(message.author.id, num)
    bot.add(member.id, num)
    message.channel.send(`<@`+message.author + `> gave ${member.user.tag} **${num}** coins, you have now ${await bot.bal(message.author.id)} and they have ${await bot.bal(member.id)}`)
  }
  }
}