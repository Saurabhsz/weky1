
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {

    const canvacord = require('canvacord')
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    let avatar
    if(member.id === message.author.id) {
    avatar = member.displayAvatarURL({format: 'jpg',size: 128 });}else {avatar = member.user.displayAvatarURL({format: 'jpg',size: 128 })}      
let image = await canvacord.Canvas.rainbow(avatar)
let attachment = new Discord.MessageAttachment( image, "gay.png")
message.channel.send(attachment)
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'gay',
                      description: 'Transforming your pfp with a rainbow effect.',
                      usage: config.prefix + 'gay {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };