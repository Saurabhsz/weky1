               /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
      const DIG = require('discord-image-generation');
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
        let avatar = user.displayAvatarURL({size: 1024, dynamic: false, format: 'png' });
        let img = await new DIG.Wanted().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, 'wanted.png');;
        message.channel.send(attach)
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'wanted',
                      description: 'Wanted.',
                      usage: config.prefix + 'wanted {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };