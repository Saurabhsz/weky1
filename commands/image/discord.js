

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "discord",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..discord',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const DIG = require('discord-image-generation');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        let img = await new DIG.DiscordBlue().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'discord.png');;
        message.channel.send(attach)
    }
}