

                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {

                    return message.reply(`Some mod turned leveling off or didnt even turned it on :rage:`)

                };
                
                module.exports.help = {
                    aliases: ['r'],
                      name:'rank',
                      description: 'Displaying you level.',
                      usage: config.prefix + 'rank {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'level',
                  disable: false,
                  cooldown: 1000,
                };