const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {
const member = message.mentions.members.first() || message.member;
    const canvas = Canvas.createCanvas(500, 670);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/811222144997916692/815827712270663700/Screenshot_532_1.png');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({size: 4096, format: 'jpg' }));
    ctx.drawImage(avatar, 150, 100, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `awesome_${member.user.username}.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "awesome",
    aliases: []
}