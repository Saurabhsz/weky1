const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {
const member = message.mentions.members.first() || message.member;
const canvas = Canvas.createCanvas(1100, 892);
const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/739308495878488065/813110914126708786/image0.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg',size: 128 }));
    ctx.drawImage(avatar, 480, 350, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `alone_${member.user.username}.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "alone",
    aliases: []
}