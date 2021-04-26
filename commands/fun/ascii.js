
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            
    const figlet = require('figlet');

            if(!args[0]) return message.channel.send('Please provide some text');
    
            msg = args.slice(0).join(" ");
    
            figlet.text(msg, function (err, data){
                if(err){
                    console.log('Something went wrong');
                    console.dir(err);
                }
                if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')
    
                message.channel.send('```' + data + '```')
            })
            };
            
            module.exports.help = {
                aliases: [],
                  name: 'ascii',
                  description: 'Converts text into ascii art.',
                  usage: config.prefix + 'ascii %text%',
              };
            
            module.exports.config = {
                args: false,
                restricted: false,
                category: 'fun',
                disable: false,
                cooldown: 1000,
            };
            