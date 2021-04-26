
            /* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
if (!args[0]){
        return message.channel.send('What should i say?')
    }
    message.channel.send(args.slice(0).join(" ") + `\n_ _ _ _ _ _ **- ${message.author.username}#${message.author.discriminator}**`)
};

module.exports.help = {
    aliases: ['repeat'],
      name: 'say',
      description: 'Says.',
      usage: config.prefix + 'say %text%',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'fun',
	disable: false,
	cooldown: 1000,
};
