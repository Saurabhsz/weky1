
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

      const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(1).join(" ") || x.user.username === args[1])
      if(!member) return message.channel.send(`No user specified`)
      const number = Math.round(parseInt(args[0]))
        if(!number) return message.reply(`No amount`)
        client.channels.cache.get("830003681638350859").send(new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setDescription(`Removed from ${member} some coins`)
        .setFooter(number)
        .setColor("RED"))
        message.reply(`Removed from ${member} ${number} coins :)`)
        client.rmv(member.id, number)
};

module.exports.help = {
    aliases: ['rmv'],
      name: 'remove',
      description: 'Removing coins from users',
      usage: config.prefix + 'remove ~amount~ @user',
  };

module.exports.config = {
	args: false,
	restricted: true,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};