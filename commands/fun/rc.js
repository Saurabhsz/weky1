const Discord = require("discord.js")

module.exports = {
  name: "randomcaps",
  aliases: ["rc"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..randomcaps',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    let msg = args.slice(0).join(" "), Case = "";
    if (!msg) return message.channel.send("Please Give Your Message!");

    for (let i in msg) {
      let Random = await Math.floor(Math.random() * 2);
      Case += Random == 1 ? msg[i].toLowerCase() : msg[i].toUpperCase();
    };

    return message.channel.send(Case);
}
}
