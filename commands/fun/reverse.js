            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
                     msg = message.content.split(" ").slice(1).join(" ");
    if(!msg){
        return message.channel.send(`You need to gib me a word or more to reverse`)
    }
    function reverseStr(str, x) {
        let rev = '';
        for (let i = str.length - 1; i  >= 0; i--) {
            x === true ? rev += str[i] : str += rev;
        }
        return message.channel.send(`**Original:** ${msg}\n\n**Reversed:** ${rev}`)
    }
    
    reverseStr(msg, true); // Output: yppah eB
            };
            
            module.exports.help = {
                aliases: [],
                  name: 'reverse',
                  description: 'Reversing letters.',
                  usage: config.prefix + 'reverse %text%',
              };
            
            module.exports.config = {
                args: false,
                restricted: false,
                category: 'fun',
                disable: false,
                cooldown: 1000,
            };
             
