const { MessageEmbed } = require("discord.js")
module.exports.config = {
    name: "say",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..say',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    if (!args[0]){
        return message.channel.send('What should i say?')
    }
    message.channel.send(args.slice(0).join(" ") + `\n_ _ _ _ _ _ **- ${message.author.username}#${message.author.discriminator}**`)

}}
