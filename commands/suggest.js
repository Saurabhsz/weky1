const { DiscordAPIError } = require("discord.js");

module.exports.run = async (bot, message, args) => {

const channel = bot.channels.cache.get('811226235585822753')

const query = args.slice(1).join(' ');
if(!query) return message.reply('Please specify the sugestion')
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
.setDescription(query)
.setTimestamp()
channel.send(embed).then(embed => {
embed.react(`<:upWeky:815202285100597260>`)
embed.react(`<:downWeky:815202675868172308>`)
message.channel.send("**Sugestion has been sent!**")
})
}
module.exports.config = {
    name: "suggest",
    description: "got a idea? let us know",
    usage: "/suggest",
    accessableby: "Members",
    aliases: []
}