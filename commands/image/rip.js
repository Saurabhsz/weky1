const Discord = require("discord.js");

module.exports.config = {
    name: "rip",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..rip',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.rip(avatar)
let attachment = new Discord.MessageAttachment( image, "rip.png")
message.channel.send(attachment)
}
}