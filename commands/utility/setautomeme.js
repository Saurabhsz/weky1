/* eslint-disable no-unused-vars */
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args, utils, data) => {
	if(data.user.premium == false) return message.channel.send(new MessageEmbed().setTitle('Error').setDescription('You discovered a premium future! [__**Click here to buy**__](https://bot.nuggetdev.com/premium) to donate.').setColor('RED'));
	if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('❌**Error:** You don\'t have the permission to do that! \nRequired permission: `MANAGE CHANNELS`.');
	const channel = message.mentions.channels.first();
	if(args[1] === 'true') {
		if(!channel) {
			const m = new MessageEmbed()
				.setColor('red')
				.addField('Error', 'Please mention a channel');
			message.channel.send(m);
			return;
		}
		if(data.guild.automeme_channel == channel.id) {
			return message.channel.send(new MessageEmbed()
				.setColor('red')
				.addField('Error', `Automeme is already \`true\` in <#${channel.id}>`));
		}
		await client.data.setautomeme_enabled(message.guild.id, 'true');
		await client.data.setautomeme_channel(message.guild.id, channel.id);
		const me = new MessageEmbed()
			.setColor('GREEN')
			.addField('Success', `Automeme setted to \`true\` in <#${channel.id}>`);
		message.channel.send(me);
	}
	else if (args[1] === 'false') {
		if(!channel) {
			const m = new MessageEmbed()
				.setColor('red')
				.addField('Error', 'Please mention a channel');
			message.channel.send(m);
			return;
		}
		if(data.guild.automeme_channel !== channel.id) {
			const n = new MessageEmbed()
				.setColor('red')
				.addField('Error', `Automeme is already \`false\` in <#${channel.id}>`);
			message.channel.send(n);
			return;
		}
		await client.data.setautomeme_enabled(message.guild.id, 'false');
		await client.data.setautomeme_channel(message.guild.id, 'null');
		const a = new MessageEmbed()
			.setColor('GREEN')
			.addField('Success', `Automeme successfully setted to \`false\` in <#${channel.id}>`);
		message.channel.send(a);
	}
	else {
		const v = new MessageEmbed()
			.setColor('RED')
			.addField('Error', 'Use this idiot `..setautomeme <channel> true/false`');
		message.channel.send(v);
	}

};

module.exports.help = {
	aliases: ['sam'],
	name: 'setautomeme',
	description: 'enable or disable automeme in a channel',
	usage: '..setautomeme %channel% %true/false%',
};

module.exports.config = {
	args: true,
	restricted: false,
	category: 'utility',
	disable: false,
	cooldown: 10000,
};