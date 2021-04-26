

                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
 if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('You don\'t have permission (MANAGE_CHANNELS) to use this command').then(m => m.delete({timeout: 5000}));
    if (!message.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send('I don\'t have permission to use that command').then(m => m.delete({timeout: 5000}))
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Warning")
   .setDescription(`:lock: | ${message.channel} has been locked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'lock',
                      description: 'Locking a channel.',
                      usage: config.prefix + 'lock',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'moderation',
                  disable: false,
                  cooldown: 1000,
                };