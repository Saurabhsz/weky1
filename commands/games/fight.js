
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            
    const challenger = message.author;
    const oppenent = message.mentions.users.first();
    if (!oppenent) return message.channel.send(`Please mention who you want to fight`);
const { fight } = require('weky')
const x = new fight({
    client: client,
    message: message,
    acceptMessage: 'Click to fight with ' + message.author,
    challenger: message.author,
    opponent: message.mentions.users.first()
})
x.start()
            };
            
            module.exports.help = {
                aliases: [],
                  name: 'fight',
                  description: 'Fight.',
                  usage: config.prefix + 'fight @user',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'games',
              disable: false,
              cooldown: 1000,
            };
            