/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
// const help = require('../../../data/helpmessages.json');
const config = require('../../util/config.json');
const fs = require('fs');

module.exports.help = {
	aliases: ['halp'],
	name: 'help',
	description: 'You can\'t be helped 😔',
	usage: config.prefix + 'help',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'Information',
	disable: false,
	cooldown: 1000,
};

module.exports.run = async (client, message, args, utils, data) => {
	try {
		const prefix = data.guild.prefix;
		if (!args[0]) {
			const a = new Discord.MessageEmbed()
				.setTitle('Hello!')
				.setDescription('I\'m Weky!\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=809496186905165834&permissions=1609952759&scope=applications.commands%20bot) | [Support Server](https://discord.gg/Sr2U5WuaSN) | [Premium](https://www.patreon.com/weky)')
                .addField("😂 Fun", `\`${prefix}help fun\``, true)
                .addField("💰 Currency", `\`${prefix}help currency\``, true)
                .addField("⚒️ Moderation", `\`${prefix}help moderation\``, true)
                .addField("🔩 Utility", `\`${prefix}help utility\``, true)
                .addField("🎮 Games", `\`${prefix}help games\``, true)
                .addField("📷 Image", `\`${prefix}help image\``, true)
                .addField('⬆️ Level', `\`${prefix}help level\``, true)
				//  .addField('<a:music_disc:826830791115931719>', `\`${prefix}help music\``, true)
				// .setFooter('Check out our website:  https://nuggetdev.com/')
				.setThumbnail(client.user.avatarURL({ type: 'png' }))
				.setColor('RANDOM');
			message.channel.send(a);
		}
		else {
			const categoryArray = fs.readdirSync('./commands/');
			const category = categoryArray.filter(x => x === args[0].toLowerCase()).join('');
			if (category) {
				const cmds = client.commands.filter(x => x.config.category.toLowerCase() === category.toLowerCase()).map(cmd => `\`${cmd.help.name}\``).join(', ');
				const cmdsEmbed = new Discord.MessageEmbed()
					.setTitle(`${category.slice(0, 1).toUpperCase()}${category.slice(1)} Commands`)
					.setDescription(cmds)
					.setColor('RANDOM')
					.setFooter('Page 1/1');
				return message.channel.send(cmdsEmbed);
			}
			else if (client.commands.has(args[0])) {
				const cmd = client.commands.get(args[0]);
				const b = new Discord.MessageEmbed()
					.setTitle(`${cmd.help.name.slice(0, 1).toUpperCase()}${cmd.help.name.slice(1).toLowerCase()}`)
					.addField('**Description:**','`' + cmd.help.description +'`')
					.addField('**Usage:**', '`' + cmd.help.usage + '`')
					.addField('**Aliases:**', cmd.help.aliases.join(', ') ? '`' + cmd.help.aliases.join('`, `') + '`' : 'None')
					.addField('**Category**', '`'+cmd.config.category + '`')
					.addField('**Disabled**', cmd.config.disable ? '`True`' : '`False`')
					.setColor('RANDOM');
				return message.channel.send(b);
			}
			else {
				return message.reply(':x: I couldn\'t find that command!');
			}
		}
	}
	catch(err) {
		console.log(err);
	}
};