            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
                let msg = args.slice(0).join(" "), Case = "";
    if (!msg) return message.channel.send("Please Give Your Message!");

    for (let i in msg) {
      let Random = await Math.floor(Math.random() * 2);
      Case += Random == 1 ? msg[i].toLowerCase() : msg[i].toUpperCase();
    };

    return message.channel.send(Case);

            };
            
            module.exports.help = {
                aliases: [],
                  name: 'mock',
                  description: 'Mock.',
                  usage: config.prefix + 'mock %text%',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };
            
