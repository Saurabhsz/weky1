const Discord = require("discord.js")
module.exports = {
    name: "blackjack",
    aliases: ['bj'],
    dmOnly: false,
    guildOnly: true,
    usage: '..blackjack (amount)',
    cooldown: 9,
    cooldowny: 1,
    guarded: true,
    permissions: ["NONE"],
    async execute(bot, message, args) {

const gambleEmbed = new Discord.MessageEmbed()
.setColor(`RANDOM`)
.setTitle(m.tag + `'s profile`)
.addField('Stats in games', 
'Blackjack wins: ' + await bot.bjWin(m.id) + `\n`,
'Slots wins: ' + await bot.sWin(m.id) + `\n`,
'Fast Type wins: ' + await bot.fsWin(m.id) + `\n`,
'Fight wins: ' + await bot.fWin(m.id) + `\n`,
'Shuffle Guess wins: ' + await bot.sgWin(m.id) + `\n`,
'Tic Tac Toe wins: ' + await bot.tttWin(m.id) + `\n`,
'Trivia wins: ' + await bot.tWin(m.id) + `\n`,
`In-Total wins: ${await bot.bjWin(m.id) + await bot.sWin(m.id) + await bot.fsWin(m.id) + await bot.fWin(m.id) + await bot.tttWin(m.id) + await bot.tWin(m.id) + await bot.sgWin(m.id)}`,
true)
.addField('Stats in activity', 
'Commands Used: ' + await bot.cmdsUSED(m.id) + `\n`,
true)
message.channel.send(gambleEmbed);
  }}