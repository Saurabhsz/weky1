

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "spank",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..spank',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const DIG = require('discord-image-generation');
        let user = message.mentions.users.first()
        if(!user){
            return message.channel.send(`This command requires two users.Make sure you pinged atleast one user in your message.`)
        }
        const secondMentionedUser = message.mentions.users.array()[1];
        if(!secondMentionedUser){
            let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
            let img = await new DIG.Spank().getImage(avatar, message.author.displayAvatarURL({size: 1024, dynamic: false, format: 'png' }))
            let attach = new Discord.MessageAttachment(img, 'spank.png');;
            message.channel.send(attach)
        } else if(secondMentionedUser){
            let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
            let img = await new DIG.Spank().getImage(avatar, secondMentionedUser.displayAvatarURL({size: 1024, dynamic: false, format: 'png' }))
            let attach = new Discord.MessageAttachment(img, 'spank.png');;
            message.channel.send(attach) 
        }

    }
}