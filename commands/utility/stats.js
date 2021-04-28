
 const { MessageEmbed } = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
    const prettyMs = require('pretty-ms')
    const msg = await message.reply(`Loading...`).then(m  => m.delete(), 1000)
let embed = new MessageEmbed()
.setAuthor(`Weky bot stats`)
.addField(`__Cache__\n`,`**Guilds**: ${client.guilds.cache.size} \n\n`, true)
.addField(`__Uptime__\n`,`**Bot**: ${client.uptime}\n**Process**: ${prettyMs(process.uptime() * 1000)}`, true)
.addField(`__Movement__\n`,`**API Latency**: ${Math.round(client.ws.ping)}\n**Bot Latency**: ${msg.createdTimestamp - message.createdTimestamp}ms`, true)
message.reply(embed)
};

module.exports.help = {
    aliases: ['servers', 'info'],
    name: 'stats',
    description: 'Stats of da bot',
    usage: config.prefix + 'stats',
};

module.exports.config = {
    args: false,
    restricted: false,
    category: 'utility',
    disable: false,
    cooldown: 1000,
};