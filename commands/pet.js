const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/petpet?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `petpet.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "pet",
    description: "pet your own soul , is good",
    usage: "/pet @user",
    accessableby: "Members",
    aliases: ["petpet"]
}