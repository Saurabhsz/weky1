const Discord = require("discord.js");
module.exports = {
      name: "uptime",
      aliases: [],
      dmOnly: false, //or false
      guildOnly: true, //or false
      usage: '..uptime',
      cooldown: 4, //seconds(s)
      guarded: true, //or false
      permissions: ["NONE"],
      async execute(bot, message, args) {
let days = Math.floor(bot.uptime / 86400000);
      let hours = Math.floor(bot.uptime / 3600000) % 24;
      let minutes = Math.floor(bot.uptime / 60000) % 60;
      let seconds = Math.floor(bot.uptime / 1000) % 60;
message.channel.send(`**__Uptime:__**\nWeky is online since ${days}**d **${hours}**h **${minutes}**m **${seconds}**s** <:Wek:798365870148681729>`);
}
}