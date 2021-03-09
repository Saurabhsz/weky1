const Discord = require("discord.js")
module.exports = {
  name: "e",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..e',
  cooldown: 3, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
      const embed = new Discord.MessageEmbed()
      .setAuthor(`<:bruv:815953238091628586> — Poll Ping`)
      .setDescription(`React to this message if you want to get notified when there will be a poll`)
    message.channel.send(embed)
}
}