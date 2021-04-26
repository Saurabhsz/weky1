
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const emo = [
        `8>`,
        `8=>`,
        `8==>`,
        `8===>`,
        `8====>`,
        `8=====>`,
        `8======>`,
        `8=======>`,
        `8========>`,
        `8=========>`,
        `8==========>`,
        `8===========>`,
        `8============>`,
        `8=============>`,
        `8==============>`,
        `8================>`,
        `8>`,
        `8=>`,
        `8==>`,
        `8===>`,
        `8====>`,
        `8=====>`,
        `8======>`,
        `8=======>`,
        `8========>`,
        `8=========>`,
        `8==========>`,
        `8===========>`,
        `8============>`,
        `8=============>`,
        `8==============>`,
        `8>`,
        `8=>`,
        `8==>`,
        `8===>`,
        `8====>`,
        `8=====>`,
        `8======>`,
        `8=======>`,
        `8========>`,
        `8=========>`,
        `8==========>`,
        `8===========>`,
        `8============>`,
        `8=============>`,
        `8==============>`,
        `8>`,
        `8=>`,
        `8==>`,
        `8===>`,
        `8====>`,
        `8=====>`,
        `8======>`,
        `8=======>`,
        `8========>`,
        `8=========>`,
        `8==========>`,
        `8===========>`,
        `8============>`,
        `8=============>`,
        `8==============>`,

   ]
   var emoji1 = Math.floor(Math.random() * emo.length);
   var emoji = emo[emoji1]
message.channel.send(emoji)
            };
            
            module.exports.help = {
                aliases: ['pp', 'ppsize'],
                  name: 'penis',
                  description: 'PP.',
                  usage: config.prefix + 'pp',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };
            