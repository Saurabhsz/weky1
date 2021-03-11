const Discord = require("discord.js");

module.exports.config = {
    name: "gray",
    aliases: ["nocolor"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..gray',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.greyscale(avatar)
let attachment = new Discord.MessageAttachment( image, "gray.png")
message.channel.send(attachment)
}
}