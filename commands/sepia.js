const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/sepia?imgUrl=${avatar}=scNyfoysHunZd79reAL5VEsQV`
    const attachment = new Discord.MessageAttachment(att , `bird.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "sepia",
    description: "sepia.",
    usage: "/sepia @user",
    accessableby: "Members",
    aliases: []
}