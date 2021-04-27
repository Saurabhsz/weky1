
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {

        const DIG = require('discord-image-generation');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
        let avatar
        if(user.id === message.author.id) {
        avatar = user.displayAvatarURL({ format: 'jpg' });}else {avatar = user.user.displayAvatarURL({ format: 'jpg' })}
        let img = await new DIG.Affect().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'affect.png');;
        message.channel.send(attach)
        
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'affect',
                      description: 'Putting your pfp in a this will dont affect my baby meme.',
                      usage: config.prefix + 'affect {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };