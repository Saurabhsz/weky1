const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`<:prayge:812975011107307521> — Chat Healer`)
    .setDescription(`React to this message if you want to get notified when the chat of this server is dead`)
    message.channel.send(embed)
}
module.exports.config = {
    name: "s",
    aliases: []
}