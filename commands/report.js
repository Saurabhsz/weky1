const { DiscordAPIError } = require("discord.js");

module.exports.run = async (bot, message, args) => {

const channel = bot.channels.cache.get('795647180995559434')


const query = args.slice(1).join(' ');
if(!query) return message.reply('Please specify the bug')
const MessageEmbed = require('discord.js')
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setTitle('New Bug!')
.addField('Author', message.author.toString(), true)
.addField('Guild', message.guild.name, true)
.addField('Report', query)
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
channel.send(embed);
message.channel.send("**Bug report has been sent!**")
}
module.exports.config = {
    name: "report",
    description: "got a bug? let us know",
    usage: "/report",
    accessableby: "Members",
    aliases: ["bugreport","reportbug"]
}