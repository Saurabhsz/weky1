const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "dither",
    aliases: ["dither565"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..daily',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/dither565?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `dither565.jpg`);
    message.channel.send(attachment);
}
}