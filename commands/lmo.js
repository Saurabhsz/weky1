const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle(`<:watermelon_head:811588276489682944> — Bot Updates Ping`)
    .setDescription(`React to this message if you want to get notified when Weky bot have any updates`)
    message.channel.send(embed)
}
module.exports.config = {
    name: "s",
    aliases: []
}