const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
const moment = require('moment');
module.exports = {
  name: "suggest",
  aliases: ["suggestion"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..suggest',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

const channel = bot.channels.cache.get('811226235585822753')

const query = args.slice(0).join(' ');
if(!query) return message.reply('Please specify the sugestion')
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
.setDescription(query)
.setTimestamp()
channel.send(embed).then(embed => {
embed.react(`<:upWeky:815202285100597260>`)
embed.react(`<:downWeky:815202675868172308>`)
message.reply("**Sugestion has been sent!**")
})
}
}