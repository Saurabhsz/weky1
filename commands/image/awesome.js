          /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
                    const Canvas = require('canvas');
                    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
                        const canvas = Canvas.createCanvas(500, 670);
                        const ctx = canvas.getContext('2d');
                        const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/811222144997916692/815827712270663700/Screenshot_532_1.png');
                        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                        let avatar
                        if(member.id === message.author.id) {
                        avatar = await Canvas.loadImage(member.displayAvatarURL({format: 'jpg',size: 128 }));}else {avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg',size: 128 }))}
                        ctx.drawImage(avatar, 150, 100, 205, 205);
                        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `awesome_${member.user.username}.jpg`);
                        message.channel.send(attachment);
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'awesome',
                      description: 'Adding to your pfp with a awesome text.',
                      usage: config.prefix + 'awesome {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };