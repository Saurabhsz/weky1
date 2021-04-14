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
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const { sudo } = require('weky')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)
        const msg = args.slice(1).join(" ")
        if(!msg) return message.reply('What should the user say?')
        const sud = new sudo({
            message: message,
            text: msg,
            member: member,
        })
        sud.start()
}
}