/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
   const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])
if(!target){
    let embed = new Discord.MessageEmbed()
    .addField(message.author.username + '\'s balance\n', "**Wallet**: " + await client.bal(message.author.id) + "\n**Bank**: " + await client.Bank(message.author.id) + "/" + await client.space(message.author.id))
    .setColor("RANDOM")
    .setTimestamp();
    message.channel.send(embed);
} else {
  let embed = new Discord.MessageEmbed()
  .addField(target.user.tag + '\'s balance\n', "**Wallet**: " + await client.bal(target.id) + "\n**Bank**: " + await client.Bank(target.id) + "/" + await client.space(target.id))
  .setColor("RANDOM")
  .setTimestamp();
  message.channel.send(embed);
}
};

module.exports.help = {
	aliases: ['bal'],
	name: 'balance',
	description: 'Showing your balance',
	usage: config.prefix + 'bal @user',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 1000,
};
 