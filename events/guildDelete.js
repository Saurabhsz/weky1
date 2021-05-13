const Discord = require('discord.js');

module.exports = async (client, guild) => {
	const channel = await client.channels.cache.get('835142255793930251');
	const m = new Discord.MessageEmbed()
		.setTitle(`Left ${guild.name}`)
	        .setThumbnail(guild.iconURL({ dynamic: true, size: 1024}))
		.setFooter(`Total servers : ${client.guilds.cache.size} | Members : ${guild.memberCount} | Owner: ${guild.owner}`)
	        .setTimestamp()
		.setColor('RED');
	channel.send(m);
};
