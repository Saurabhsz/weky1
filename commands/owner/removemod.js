/* eslint-disable no-unused-vars */

const Discord = require('discord.js');
const config = require('../../util/config.json');
module.exports.run = async (client, message, args) => {
	const target = message.mentions.members.first() || message.guild.members.cache.find((m) => m.user.id === args[0] || m.user.tag.startsWith(args[0]) || m.displayName.startsWith(args[0]));

	const superMods = ['778518819055861761', '619498919763640330', '792105006219657257'];
	if(!superMods.includes(message.author.id)) {
		return message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Bro')
				.setDescription(
					'LEAVE ME FUCKING ALONE MF',
				)
				.setColor('RED'),
		);
	}
	if(!target) return message.channel.send('No mod specified.');

	const checkTarget = message.guild.members.cache.get(`${target.id}`);
	if (!checkTarget) {
		return message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Error')
				.setDescription(
					`${target} is a invalid user.`,
				)
				.setColor('RED'),
		);
	}

	const fetch = await client.data.getUserDB(target.id);

	if (fetch.moderator) {

		await client.data.moderator(target.id, 'false');
		message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Success!')
				.setDescription(
					`Successfully revoked **<@${target.id}>'s** Weky Moderator`,
				)
				.setColor('RED'),
		);
		return message.guild.members.cache
			.get(target.id)
			.send(
				new Discord.MessageEmbed()
					.setTitle('Alert')
					.setDescription(
						`**${message.author.tag}** revoked your Weky Moderator`,
					)
					.setColor('RED'),
			);
	}
	else {
		return message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Error')
				.setDescription('This user doesn\'t have Weky Moderator')
				.setColor('RED'),
		);
	}
};

module.exports.help = {
	aliases: ['r-m'],
	name: 'remove-mod',
	description: 'Remove a Weky Moderator',
	usage: config.prefix + 'remove-mod @user',
};

module.exports.config = {
	category: 'owner',
	restricted: true,
	disable: false,
	cooldown: 2000,
};