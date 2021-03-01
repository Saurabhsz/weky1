

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {
const member = message.mentions.members.first() || message.member;
    const canvas = Canvas.createCanvas(500, 670);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/emojis/815263022532395008.png?v=1');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // // ctx.arc(350, 150, 100, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({size: 256, format: 'jpg' }));
    ctx.drawImage(avatar, 250, 10, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `sock_${member.user.username}.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "sock",
    aliases: []
}