
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
var i = ''
var e = 0
const inventory = require("../../schemas/inventory")
inventory.findOne({User: message.author.id},(err, b) => {
  if(!b) {
client.createProfile(message.author.id)
  }
if(data.user.premium == true) {i += '\nPremium user - 25%\n'; e += 25};
if(b.BoosterEffect !== 0) {i += '\nBooster effect - 10%\n'; e += 10};
if(message.guild.id === '830003680983646278') {i += 'Official server - 15%\n'; e += 15};
if (message.channel.name.includes('🌝')) {i += 'Channel name includes 🌝 - 1%\n'; e += 1};
if (message.channel.name.includes('weky')) {i += 'Channel name includes `Weky` - 1%\n'; e += 1};
message.reply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
  .setTitle(`Total: ` +e + '%')
  .setDescription(i)
  .setFooter('xd')
  .setTimestamp()
)
})
};

module.exports.help = {
    aliases: ['multi'],
      name: 'multiplier',
      description: 'Displaying your/user\'s multiplier.',
      usage: config.prefix + 'multipliet {none OR @user}',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};
