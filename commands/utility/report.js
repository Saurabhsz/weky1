

const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const channel = bot.channels.cache.get('835185415224950794')


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
};

module.exports.help = {
    aliases: ['report', 'reportbug'],
    name: 'bug',
    description: 'Report a bug',
    usage: config.prefix + 'report %bug%',
};

module.exports.config = {
    args: false,
    restricted: false,
    category: 'utility',
    disable: false,
    cooldown: 1000,
};