const Discord = require("discord.js");
module.exports = {
    name: "blur",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..blur',
    cooldown: 3, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.member;
    const avatar = (member.user.displayAvatarURL({ format: 'jpg' }));
let image = await canvacord.Canvas.blur(avatar)
let attachment = new Discord.MessageAttachment( image, "blur.png")
message.channel.send(attachment)
}
}