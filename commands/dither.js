const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/dither565?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `dither565.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "dither",
    description: "sepia.",
    usage: "..dither @user",
    accessableby: "Members",
    aliases: ["dither565"]
}