const { MessageEmbed } = require('discord.js');

module.exports = async (client, guild) => {
	const channel = await client.channels.cache.get('835142227545686086');
	const m = new MessageEmbed()
		.setTitle(`Joined ${guild.name}`)
		.setFooter(`Total servers : ${client.guilds.cache.size} | Members : ${guild.memberCount} | Owner: ${guild.owner}`)
		.setColor('GREEN');
	channel.send(m);
};
