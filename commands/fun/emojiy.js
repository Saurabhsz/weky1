
            /* eslint-disable no-unused-vars */
            const Discord = require('discord.js');
            const config = require('../../util/config.json');
            
            module.exports.run = async (client, message, args, utils, data) => {
            
            };
            const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

    if(!args[0]){
        return message.channel.send(`What to emojify jeez`)
    }
  message.channel.send(args.slice(0).join(" ").split('').map(c => mapping[c] || c).join(''));
            module.exports.help = {
                aliases: [],
                  name: 'emojify',
                  description: 'Text to Emoji.',
                  usage: config.prefix + 'emojify %text%',
              };
            
            module.exports.config = {
              args: false,
              restricted: false,
              category: 'fun',
              disable: false,
              cooldown: 1000,
            };
