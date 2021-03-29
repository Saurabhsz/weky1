

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "slap",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..slap',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const DIG = require('discord-image-generation');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
        if(!user){
            return message.channel.send(`This command requires two users.Make sure you pinged atleast one user in your message.`)
        }
        const secondMentionedUser = message.mentions.users.array()[1];
        if(!secondMentionedUser){
            let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
            let img = await new DIG.Batslap().getImage(avatar, message.author.displayAvatarURL({size: 1024, dynamic: false, format: 'png' }))
            let attach = new Discord.MessageAttachment(img, 'slap.png');;
            message.channel.send(attach)
        } else if(secondMentionedUser){
            let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
            let img = await new DIG.Batslap().getImage(avatar, secondMentionedUser.displayAvatarURL({size: 1024, dynamic: false, format: 'png' }))
            let attach = new Discord.MessageAttachment(img, 'slap.png');;
            message.channel.send(attach) 
        }

    }
}