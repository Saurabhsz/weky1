/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');
module.exports.run = async (client, message, [target, ...args], utils, data) => {
	target = await client.users.fetch(target);

	if(!target) return utils.errorEmbed(message, 'Invalid user.');

	const channel = client.channels.cache.get('835142311838744626');
	const checkbl = await client.data.getUserDB(target.id);

	if(checkbl.blacklisted) return message.reply(`That user is already blacklisted!\n**User:** ${target.username + '#' + target.discriminator}\n**Reason:** \`${checkbl.blacklisted_reason}\``);

	let reason = args.join(' ');
	if(!reason) reason = 'Not specified';

	const blacklist = await client.data.blacklist(target.id, 'true', reason);
	const logEmbed = new Discord.MessageEmbed()
		.setTitle('User Blacklisted')
		.setDescription(`**${target.username}#${target.discriminator}** was blacklisted from using the bot.\n\nResponsible Moderator : **${message.author.username}**\n\nReason : **${blacklist.reason}**`)
		.setFooter('Blacklist registered')
		.setColor('RED')
		.setTimestamp();

	target.send(`You have been blacklisted from using the bot! \n **Reason:** ${reason}\n **Moderator:** ${message.author.tag} \n**Join our support server (https://discord.gg/Sr2U5WuaSN) to appeal** `).catch(err => {
		message.channel.send(`${target.username} has DM's disabled. I was unable to send him a message - but blacklist has been registered!`);
		console.log(err);
	});

	message.reply(
		`Blacklisted **${target.username + '#' + target.discriminator}**\n` +
			`Reason: \`${blacklist.reason}\``, +`Moderator: \`${message.author.tag}\``,
	);
	channel.send(logEmbed);
	message.delete();
};

module.exports.help = {
	aliases: [],
	name: 'blacklist',
	description: 'Blacklist a person from the bot',
	usage: 'y ?',
};

module.exports.config = {
	restricted: true,
	args: true,
	category: 'owner',
	disable: false,
	cooldown: 0,
};