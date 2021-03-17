const Discord = require('discord.js')
const got = require('got')
module.exports = {
    name: "b",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..b',
    cooldown: 3, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        message.delete()
    const embed = new Discord.MessageEmbed()
.setTitle(`<:Hmm:815953597983621160> — Suggestion Ping`)
.setDescription(`React to this message if you want to get notified when someone will suggest something and you will can vote`)
message.channel.send(embed)
}
}