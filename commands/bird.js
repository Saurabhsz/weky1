const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/other/gav?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `bird.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "bird",
    description: "sending the drip meme but with the mentionoted user's avatar",
    usage: "/bird @user",
    accessableby: "Members",
    aliases: ["gav"]
}