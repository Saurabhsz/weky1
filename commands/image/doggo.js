

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "doggo",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..doggo',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
const member = message.mentions.members.first() || message.member;
    const canvas = Canvas.createCanvas(500, 670);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/779450313723084870/815636172579405844/image0.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg' }));
    ctx.drawImage(avatar, 250, 50, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `doggo_${member.user.username}.jpg`);
    message.channel.send(attachment);
}
}