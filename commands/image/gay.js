const Discord = require("discord.js");

module.exports = {
    name: "gay",
    aliases: ["rainbow"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..gay',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.rainbow(avatar)
let attachment = new Discord.MessageAttachment( image, "gay.png")
message.channel.send(attachment)
}
}