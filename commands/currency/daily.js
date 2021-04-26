/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
  if(data.user.premium == false) {client.add(message.author.id, 3000, message)
   message.channel.send("You collected your daily 3000 coins, nice")}else {
    client.add(message.author.id, 6000, message)
    message.channel.send("You collected your daily 6000 coins, because you are a premium user ;)") }
};

module.exports.help = {
	aliases: [],
	name: 'daily',
	description: 'Claiming your daily coins. <:Man:830066747171799091> | Donators gets x2',
	usage: config.prefix + 'daily',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 86400000,
};