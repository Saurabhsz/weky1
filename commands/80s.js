const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att = `https://api.monkedev.com/canvas/80s?key=scNyfoysHunZd79reAL5VEsQV&imgUrl=${avatar}`
    const attachment = new Discord.MessageAttachment(att , `80s.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "80s",
    description: "80 seconds vibe go brrrr.",
    usage: "..80s @user",
    accessableby: "Members",
    aliases: ["80seconds"]
}