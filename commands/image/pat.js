const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "pat",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..pat',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/petpet?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `patpat.gif`);
    message.channel.send(attachment);
}
}