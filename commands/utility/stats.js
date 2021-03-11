

const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
  name: "stats",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..stats',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const prettyMs = require('pretty-ms')
    const msg = await message.reply(`Loading...`).then(m  => m.delete(), 1000)
let embed = new Discord.MessageEmbed()
.setAuthor(`Weky bot stats`)
.addField(`__Cache__\n`,`**Guilds**: ${bot.guilds.cache.size} \n\n`, true)
.addField(`__Uptime__\n`,`**Bot**: ${bot.uptime}\n**Process**: ${prettyMs(process.uptime() * 1000)}`, true)
.addField(`__Movement__\n`,`**API Latency**: ${Math.round(bot.ws.ping)}\n**Bot Latency**: ${msg.createdTimestamp - message.createdTimestamp}ms`, true)
message.reply(embed)
}
}