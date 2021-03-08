const Discord = require("discord.js");
module.exports = {
    name: "facepalm",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..facepalm',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.facepalm(avatar)
let attachment = new Discord.MessageAttachment( image, "facepalm.png")
message.channel.send(attachment)
}
}