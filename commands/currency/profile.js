
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');
function clean(text) {
	if (typeof (text) === 'string') {return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));}
	else {return text;}
}
module.exports.run = async (client, message, args, utils, data) => {

      const inventory = require("../../schemas/inventory")
      inventory.findOne({ User: message.author.id }, async (err, ata) => {
      const m = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
var e; if(m.id === message.author.id){e = m.tag} else { e = m.user.tag}
var xd;if(m.id === message.author.id){xd = m.displayAvatarURL()} else {xd = m.user.displayAvatarURL()}
var a;
if(ata.BreadEffect !== 0){ a = `<:good:821393129999171626>`}else
if(ata.BreadEffect == 0) {a = `<:offline:821392620982632489>`}
var b;
if(ata.EnergyBolt !== 0) {b= `<:good:821393129999171626>`}else 
if(ata.EnergyBolt == 0) {b= `<:offline:821392620982632489>`}
var c;
if(ata.BoosterEffect !== 0) {c = `<:good:821393129999171626>`}else
if(ata.BoosterEffect == 0) {c = `<:offline:821392620982632489>`}
// e.addField('Stats in activity', 
// '👀 Commands Used: ' + await client.cmdsUSED(m.id) + `\n`,
// true)
const game = new Discord.MessageEmbed()
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
const Perks = new Discord.MessageEmbed()
.addField('Perks', 
'Bread: ' + a + `\n` +
'Energy Drink: ' + b + `\n` +
'Booster: ' + c + `\n`,
true)
const normal = new Discord.MessageEmbed()
.setTitle(`${e}'s profile`)
.setColor('RANDOM')
.setURL('https://patreon.com/Weky')
.setThumbnail(xd)
.addField('_ _','<:status:837968048035201035> **Status**\n' + '```' + clean(await client.status(message.author.id)) + '```', true)
.addField('_ _','<:stats:837971097005195275> **Stats**\n'+`\`\`\`js
\n____________
\nIQ: ${await client.IQ(message.author.id)}\n
Evilness: ${await client.Evilness(message.author.id)}\n
Goodness: ${await client.Goodness(message.author.id)}
\`\`\``, true )
.addField('_ _','<:wek:837995743976620052> **Premium**\n`'+ data.user.premium + '`',  true)
.addField('Info:','*Evilness* is from robbing.\n*Goodness* is from sharing/gifting.\n*IQ* is from studying.',  true)
.setTimestamp()
.setFooter('use ..profile ^games or ^perks', xd);
if(!args[0]){
message.channel.send(normal);
} else if (args[0] === '^games'){
message.reply(game)
} else if (args[0] === '^perks'){
  message.reply(Perks)
}
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
