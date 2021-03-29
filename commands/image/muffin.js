const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "muff",
    aliases: ["muffin"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..muff',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
const canvas = Canvas.createCanvas(867, 892);
const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/812590454821355543/813101398686302269/76ede48130575ef6b9816fd15cd714dd.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // // ctx.arc(350, 150, 100, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 300, 320, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `muffin_${member.user.username}.jpg`);
    message.channel.send(attachment);
}
}