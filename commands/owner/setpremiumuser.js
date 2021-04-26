/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const users = require('../../schemas/userDB');
module.exports.run = async (client, message, args, utils, data) => {

	const target = args[0];
	if(!target) return message.channel.send(new Discord.MessageEmbed().setTitle('Error').setDescription('Please provide a user!').setColor('RED'));
	const tier = args[1];
	await client.users.fetch(target);
	users.findOne({ id: target }, async (err, Data) => {
		if(err) throw err;
		if(!Data) return message.channel.send(new Discord.MessageEmbed().setTitle('Error').setDescription('user not found').setColor('RED'));
		Data.tier = tier;
		Data.premium = true;
		Data.save();
		message.channel.send(new Discord.MessageEmbed().setTitle('Success!').setDescription(`Premium set to \`level ${tier}\` for **${client.users.cache.get(target).tag}** `).setColor('GREEN'));
		client.channels.cache.get('835918793166422016').send(new Discord.MessageEmbed().setTitle(`Premium level ${tier} added to ${client.users.cache.get(target).username}`).setColor('GREEN'));
	});
};
module.exports.help = {
	aliases: ['setuserp', 'userp'],
	name: 'setuserpremium',
	description: 'Set a user premium',
	usage: '.setuserpremium %ID% %toggle% %level%',
};

module.exports.config = {
	args: false,
	restricted: true,
	category: 'owner',
	disable: false,
	cooldown: 0,
};