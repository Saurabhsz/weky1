const { MessageEmbed } = require('discord.js');

module.exports = async (client, guild) => {
  const channel = client.channels.cache.get('835142227545686086');
  const m = new MessageEmbed()
    .setTitle(`Left ${guild.name}`)
    .setThumbnail(guild.iconURL({ dynamic: true, size: 1024 }))
    .setFooter(`Total servers : ${client.guilds.cache.size} | Members : ${guild.memberCount} | Owner: ${guild.owner}`)
    .setTimestamp()
    .setColor('RED');
  channel.send(m);
};
