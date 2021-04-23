const Discord = require('discord.js');

module.exports = async (bot, guild) => {
	const channel = await bot.channels.cache.get('835142255793930251');
	const m = new Discord.MessageEmbed()
		.setTitle(`Left ${guild.name}`)
		.setFooter(`Total servers : ${bot.guilds.cache.size} | Members : ${guild.memberCount} | Owner: ${guild.owner}`)
		.setColor('RED');
	channel.send(m);
};