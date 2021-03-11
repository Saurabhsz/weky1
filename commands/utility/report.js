const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "report",
    aliases: ["bug"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..report',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {

const channel = bot.channels.cache.get('795647180995559434')


const query = args.slice(0).join(' ');
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
}