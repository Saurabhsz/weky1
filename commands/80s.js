const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {

const member = message.mentions.members.first() || message.member;
const avatar = member.user.displayAvatarURL({ format: 'jpg' });
const att =     `https://api.monkedev.com/fun/8ball?key=scNyfoysHunZd79reAL5VEsQV`
    const attachment = new Discord.MessageAttachment(att , `80s.jpg`);
    message.channel.send(attachment);
}

module.exports.config = {
    name: "80s",
    description: "80s vibe go brrrrrr",
    usage: "/80s @user",
    accessableby: "Members",
    aliases: ["80seconds"]
}