
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
                    const { sudo } = require('weky')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)
        const msg = args.slice(1).join(" ")
        if(!msg) return message.reply('What should the user say?')
        const sud = new sudo({
            message: message,
            text: msg,
            member: member,
        })
        sud.start()
            };
            
            module.exports.help = {
                aliases: ['doofus'],
                  name: 'sudo',
                  description: 'Sudo.',
                  usage: config.prefix + 'sudo @user',
              };
            
            module.exports.config = {
                args: false,
                restricted: false,
                category: 'fun',
                disable: false,
                cooldown: 1000,
            };
            
