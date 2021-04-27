
      /* eslint-disable no-unused-vars */
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const { Discord, Collection, MessageEmbed} = require("discord.js")
      const collection = new Collection()
      await Promise.all(
        message.guild.members.cache.map(async (member) => {
            const id = member.id
            const bal = await client.bal(id)
            return bal !== 0
             ? collection.set(id, {
               id,
               bal,
             })
             : null;
          })
      );
      const ata = collection.sort((a, b) => b.bal - a.bal).first(10);

      message.channel.send(
        new MessageEmbed()
      .setTitle(`Leaderboard in ${message.guild.name}`)
     .setDescription(
       ata.map((v, i) => {
         return `${i+1}. ${client.users.cache.get(v.id).tag} => **${v.bal} coins**`
       })
     )
      )
};

module.exports.help = {
    aliases: ['leaderboard','lb', 'leader'],
      name: 'rich',
      description: 'Displaying top 10 users.',
      usage: config.prefix + 'rich',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};
