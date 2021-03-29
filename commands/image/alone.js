const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "alone",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..alone',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
const canvas = Canvas.createCanvas(1100, 892);
const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/739308495878488065/813110914126708786/image0.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg',size: 128 }));
    ctx.drawImage(avatar, 480, 350, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `alone_${member.user.username}.jpg`);
    message.channel.send(attachment);
}
}