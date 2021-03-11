const Discord = require("discord.js");
module.exports.config = {
    name: "hitler",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..hitler',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.hitler(avatar)
let attachment = new Discord.MessageAttachment( image, "hitler.png")
message.channel.send(attachment)
}
}