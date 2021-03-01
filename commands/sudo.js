const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
module.exports.run = async (bot, message, args) => {
        if (!args[1]) return message.reply('Mention someone you doofus!')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)

        message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(args.slice(2).join(" "))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
}
module.exports.config = {
    name: "sudo",
    usage: "..sudo @mention <text>",
    accessableby: "Members",
    aliases: []
}