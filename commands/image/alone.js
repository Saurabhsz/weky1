
    
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {

const Canvas = require('canvas');
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
const canvas = Canvas.createCanvas(1100, 892);
const ctx = canvas.getContext('2d');
    const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/739308495878488065/813110914126708786/image0.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    let avatar
if(member.id === message.author.id) {
avatar = await Canvas.loadImage(member.displayAvatarURL({format: 'jpg',size: 128 }));}else {avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: 'jpg',size: 128 }))}
let user
if(member.id === message.author.id) {
user = member.usermane;}else {user =member.user.username}
ctx.drawImage(avatar, 480, 350, 205, 205);
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `alone_${member.user.username}.jpg`);
    message.channel.send(attachment);
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'alone',
                      description: 'Adding your pfp in spongebob waiting alone.',
                      usage: config.prefix + 'alone {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'image',
                  disable: false,
                  cooldown: 1000,
                };