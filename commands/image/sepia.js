const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "sepia",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..sepia',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/sepia?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `sepia.jpg`);
    message.channel.send(attachment);
}
}