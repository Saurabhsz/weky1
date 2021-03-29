const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "drip",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..drip',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    const canvas = Canvas.createCanvas(867, 892);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://i.redd.it/ybb2xn4hs6a61.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // // ctx.arc(350, 150, 100, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.clip();
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 350, 150, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `Drip${member.user.username}.jpg`);
    message.channel.send(attachment);
}
}