
   const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

const moment = require('moment');
       const then = moment(message.guild.createdAt);
       const time = then.from(moment());
       const ca = then.format("MMM Do, YYYY");

   const embed = new Discord.MessageEmbed()
     .setColor('BLUE')
     .setAuthor(`${message.guild.name} \| ID: ${message.guild.id}`, message.guild.iconURL())
     .setThumbnail(message.guild.iconURL())
     .addField('**Owner**', `<@${message.guild.ownerID}>`, true)
     .addField('**Created At**', `${ca} \n(${time})`, true)
     .addField('\u200B', "\u200B", true)
     .addField('**Roles**', message.guild.roles.cache.size, true)
     .addField('**Emojis**', message.guild.emojis.cache.size, true)
     .addField('Boosting Tier', `Tier ${message.guild.premiumTier}`, true)
     .addField('**Verification Level**', message.guild.verificationLevel, true)
     .addField('**Explicit Content Filter**', message.guild.explicitContentFilter, true)
     .addField('**Region**', message.guild.region, true)
     .addField('**Members**', `🧍 ${message.guild.memberCount}`, true)
     .addField('**Channels**', `⌨️ ${message.guild.channels.cache.filter(channel => channel.type == 'text').size} \| 🔈 ${message.guild.channels.cache.filter(channel => channel.type == 'voice').size} \| 📁 ${message.guild.channels.cache.filter(channel => channel.type == 'category').size} \| 📢 ${message.guild.channels.cache.filter(channel => channel.type == 'news').size}`, true)
     .addField('**Community Features**', `${message.guild.features.join(", ") || "No Community Features!"}`, false)
   message.channel.send(embed);
};

module.exports.help = {
    aliases: ['si', 'serveri'],
    name: 'serverinfo',
    description: 'Info about da server',
    usage: config.prefix + 'serverinfo',
};

module.exports.config = {
    args: false,
    restricted: false,
    category: 'utility',
    disable: false,
    cooldown: 1000,
};