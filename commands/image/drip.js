
    
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
const Canvas = require('canvas');

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    const canvas = Canvas.createCanvas(867, 892);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://i.redd.it/ybb2xn4hs6a61.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // // ctx.arc(350, 150, 100, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.clip();
    let avatar
    if(member.id === message.author.id) {
    avatar = Canvas.loadImage(member.displayAvatarURL({format: 'jpg',size: 128 }));}else {avatar = Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg',size: 128 }))}      
    ctx.drawImage(avatar, 350, 150, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `Drip${member.user.username}.jpg`);
    message.channel.send(attachment);
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'drip',
                      description: 'Transforming your pfp in a drip meme.',
                      usage: config.prefix + 'drip {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };