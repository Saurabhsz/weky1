const Discord = require('discord.js');

module.exports = async (bot, guild) => {
	const channel = await bot.channels.cache.get('835142227545686086');
	const m = new Discord.MessageEmbed()
		.setTitle(`Joined ${guild.name}`)
		.setFooter(`Total servers : ${bot.guilds.cache.size} | Members : ${guild.memberCount} | Owner: ${guild.owner}`)
		.setColor('GREEN');
	channel.send(m);
};