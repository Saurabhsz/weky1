const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: "sudo",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..sudo',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        if (!args[1]) return message.reply('Mention someone you doofus!')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)

        message.channel.createWebhook("FAKE | "+member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(args.slice(2).join(" "))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
}
}