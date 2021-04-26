/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args) => {
	const target = message.mentions.members.first() || message.guild.members.cache.find((m) => m.user.id === args[0] || m.user.tag.startsWith(args[0]) || m.displayName.startsWith(args[0]));

	const superMods = ['778518819055861761', '619498919763640330', '792105006219657257'];
	if(!superMods.includes(message.author.id)) {
		return message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Error')
				.setDescription(
					'Leave me fucking alone.',
				)
				.setColor('RED'),
		);
	}

	if(!target) return message.channel.send('No user to give weky moderator specified.');

	const checkTarget = message.guild.members.cache.get(`${target.id}`);
	if (!checkTarget) {
		return message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Error')
				.setDescription(
					`${target} is invalid user.`,
				)
				.setColor('RED'),
		);
	}

	const fetch = await client.data.getUserDB(target.id);

	if (fetch.moderator) {
		return message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Error')
				.setDescription('This user is already a Weky Moderator')
				.setColor('RED'),
		);
	}
	else {
		await client.data.moderator(target.id, 'true');

		message.channel.send(
			new Discord.MessageEmbed()
				.setTitle('Success!')
				.setDescription(
					`**<@${target.id}>** was successfully added as Weky Moderator `,
				)
				.setColor('GREEN'),
		);
		return message.guild.members.cache
			.get(target.id)
			.send(
				new Discord.MessageEmbed()
					.setTitle('IMPORTANT')
					.setDescription(
						`**${message.author.tag}** added you as a **Weky Moderator**`,
					)
					.setColor('GREEN'),
			);
	}
};

module.exports.help = {
	aliases: ['a-m'],
	name: 'add-mod',
	description: 'Add a Weky Moderator',
	usage: config.prefix + 'add-mod @user',
};

module.exports.config = {
	restricted: false,
	category: 'owner',
	disable: false,
	cooldown: 0,
};