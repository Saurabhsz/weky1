            /* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
    if(!args[0]) return message.reply(`Please put a valid question <:ah:811587999380799498>.`)
    const fetch = require('node-fetch')
    const res = await (await (fetch(`https://api.monkedev.com/fun/8ball?key=scNyfoysHunZd79reAL5VEsQV`))).json();
    const b = new Discord.MessageEmbed()
    .setTitle(`${args.join(' ').slice(0, 210)}\``)
    .setDescription(`😶 \`${res.answer}\``)
    message.reply(b)
};

module.exports.help = {
    aliases: ['8-ball'],
      name: '8ball',
      description: '8ball have answers.',
      usage: config.prefix + '8ball %question%',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'fun',
	disable: false,
	cooldown: 1000,
};
