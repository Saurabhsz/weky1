/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const { MessageEmbed } = require("discord.js")

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0])
if(!member) return message.channel.send(`Use this blocked head :rolling_eyes:\n\`..share @mymom [number]\``)
    var num = Math.round(parseFloat(args[1]))
    const ae = Math.floor(Math.random() * 20)
    if(!num) return message.channel.send(`Use this blocked head :rolling_eyes:\n\`..share @mymom [number]\``)
  if(args[1] === 'all' && isNaN(num)){
    clienr.rmv(message.author.id, await client.bal(message.author.id))
    client.add(member.id, await client.bal(message.author.id), message)
    client.ADDGoodness(message.author.id, ae)
    client.RMVEvilness(message.author.id, ae)
    message.channel.send(`<@`+message.author + `> gave ${member.user.tag} **${await client.bal(message.author.id)}** coins, you have now ${await client.bal(message.author.id)} and they have ${await client.bal(member.id)}||Lost ${ae} evilness & got ${ae} goodness||`)
    member.user.send(`${message.author.username} gave you **` + await client.bal(message.author.id) + `** coins in **${message.guild.name}**`).catch(e => {
      return;
    }) 
  } else if (isNaN(num) && args[1] !== 'all') {
    return message.channel.send(`Use this blocked head :rolling_eyes:\n\`..share @mymom [number]\``)
  } else {
    if(num >= await client.bal(message.author.id)) return message.reply(`You dont have that many coins lol`)
    client.rmv(message.author.id, num)
    client.add(member.id, num, message)
    client.ADDGoodness(message.author.id, ae)
    client.RMVEvilness(message.author.id, ae)
    message.channel.send(`<@`+message.author + `> gave ${member.user.tag} **${num}** coins, you have now ${await client.bal(message.author.id)} and they have ${await client.bal(member.id)}||Lost ${ae} evilness & got ${ae} goodness||`)
    member.user.send(`${message.author.username} gave you **` + num + `** coins in **${message.guild.name}**`).catch(e => {
      return;
    })
  }
};

module.exports.help = {
    aliases: ['share','pay'],
      name: 'give',
      description: 'Sharing coins to users',
      usage: config.prefix + 'share ~amount~ @user',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};