
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {

      const inventory = require("../../schemas/inventory")
      inventory.findOne({ User: message.author.id }, async (err, ata) => {
      const m = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
var e;
      if(m.id === message.author.id){
  e = m.tag
} else {
  e = m.user.tag
}
var a;
if(ata.BreadEffect !== 0){ a = `<:good:821393129999171626>`}else
if(ata.BreadEffect == 0) {a = `<:offline:821392620982632489>`}
var b;
if(ata.EnergyBolt !== 0) {b= `<:good:821393129999171626>`}else 
if(ata.EnergyBolt == 0) {b= `<:offline:821392620982632489>`}
var c;
if(ata.BoosterEffect !== 0) {c = `<:good:821393129999171626>`}else
if(ata.BoosterEffect == 0) {c = `<:offline:821392620982632489>`}
const gambleEmbed = new Discord.MessageEmbed()
.setColor(`RANDOM`)
.setTitle(e + `'s profile`)
.addField('**Stats in games**\n',
'🃏 Blackjack wins: ' + await client.bjWin(m.id) + `\n` +
'🎰 Slots wins: ' + await client.sWin(m.id) + `\n` +
'⌨️ Fast Type wins: ' + await client.fsWin(m.id) + `\n` +
'👊 Fight wins: ' + await client.fWin(m.id) + `\n` +
'🤔 Shuffle Guess wins: ' + await client.sgWin(m.id) + `\n` +
'❌ Tic Tac Toe wins: ' + await client.tttWin(m.id) + `\n` +
'❓ Trivia wins: ' + await client.tWin(m.id) + `\n` +
`In-Total wins: ${await client.bjWin(m.id) + await client.sWin(m.id) + await client.fsWin(m.id) + await client.fWin(m.id) + await client.tttWin(m.id) + await client.tWin(m.id) + await client.sgWin(m.id)}`, true)
.addField('Stats in activity', 
'👀 Commands Used: ' + await client.cmdsUSED(m.id) + `\n`,
true)
.addField('Perks', 
'Bread: ' + a + `\n` +
'Energy Drink: ' + b + `\n` +
'Booster: ' + c + `\n`,
true)
message.channel.send(gambleEmbed);
})
};

module.exports.help = {
    aliases: [],
      name: 'profile',
      description: 'Displaying your profile.',
      usage: config.prefix + 'profile {none OR @user}',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};
