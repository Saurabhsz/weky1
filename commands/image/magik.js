                 /* eslint-disable no-unused-vars */
                  const Discord = require('discord.js');
                  const config = require('../../util/config.json');
                  
                  module.exports.run = async (client, message, args, utils, data) => {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
        let avatar = user.avatarURL({
          format: 'png',
          dynamic: false,
          size: 128
        })
        message.channel.send('Loading...')
        const e = Math.floor(Math.random() * 10) +1
          const res = `https://nekobot.xyz/api/imagegen?type=magik&image=${avatar}&intensity=${e}&raw=1`
          const embed = new Discord.MessageEmbed()
          .setImage(res)
          .setColor('#303030')
          message.channel.send(embed);
 
                  };
                  
                  module.exports.help = {
                      aliases: [],
                        name:'magik',
                        description: 'Transforming your pfp with a magik effect.',
                        usage: config.prefix + 'magik {none OR @user}',
                    };
                  
                  module.exports.config = {
                    args: false,
                    restricted: false,
                    category: 'image',
                    disable: false,
                    cooldown: 1000,
                  };