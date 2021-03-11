const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.config = {
    name: "bird",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..bird',
    cooldown: 3, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/other/gav?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `bird.jpg`);
    message.channel.send(attachment);
}}