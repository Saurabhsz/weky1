
                    /* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const { MessageEmbed } = require("discord.js")
        let rate = (Math.floor(Math.random() * Math.floor(100)));
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("NOOB MACHINE")
        .setDescription(`You are ${rate}% noob 🇳 🇴 🇴 🇧`)
        .setTimestamp()
        message.channel.send(embed)
};

module.exports.help = {
    aliases: ['nr'],
      name: 'noobrate',
      description: 'Rating your nooby.',
      usage: config.prefix + 'noobrate',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'fun',
	disable: false,
	cooldown: 1000,
};
