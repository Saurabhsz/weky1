             /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {


const Canvas = require('canvas');
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    const canvas = Canvas.createCanvas(500, 670);
    const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/emojis/815263022532395008.png?v=1');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    // ctx.beginPath();
    // // ctx.arc(350, 150, 100, 0, Math.PI * 2, true);
    // ctx.closePath();
    // ctx.clip();
    let avatar
if(member.id === message.author.id) {
avatar =await Canvas.loadImage(member.displayAvatarURL({size: 256, format: 'jpg' }));}else {avatar =await Canvas.loadImage(member.user.displayAvatarURL({size: 256, format: 'jpg' }));}      

    ctx.drawImage(avatar, 250, 10, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `sock_${member.user.username}.jpg`);
    message.channel.send(attachment);
   
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'sock',
                      description: 'Sock.',
                      usage: config.prefix + 'sock {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };