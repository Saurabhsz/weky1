

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "ad",
    aliases: ["advertisment"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..ad',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const DIG = require('discord-image-generation');
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        let img = await new DIG.Ad().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'ad.png');;
        message.channel.send(attach)
    }
}