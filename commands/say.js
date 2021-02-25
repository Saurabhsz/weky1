const { MessageEmbed } = require("discord.js")
module.exports.run = async (client, message, args) => {
    if (!args[0]){
        return message.channel.send('What should i say?')
    }
    message.channel.send(args.slice(0).join(" ") + `\n_ _ _ _ _ _ - ${message.author.username}#${message.author.discriminator}`)

}
module.exports.config = {
    name: "say",
    description: "Says your message",
    usage: "/say",
    accessableby: "Members",
    aliases: []
}