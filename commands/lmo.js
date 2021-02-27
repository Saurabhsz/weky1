const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`<:Angery:806544377987465216> — Giveaway Ping`)
    .setDescription(`React to this message if you want to get notified when there will be a giveaway`)
    message.channel.send(embed)
}
module.exports.config = {
    name: "s",
    aliases: []
}