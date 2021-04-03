const Discord = require("discord.js")
module.exports = {
    name: "profile",
    aliases: ['level'],
    dmOnly: false,
    guildOnly: true,
    usage: '..profile',
    cooldown: 9,
    cooldowny: 1,
    guarded: true,
    permissions: ["NONE"],
    async execute(bot, message, args) {
      const m = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
var e;
      if(m.id === message.author.id){
  e = m.tag
} else {
  e = m.user.tag
}
const gambleEmbed = new Discord.MessageEmbed()
.setColor(`RANDOM`)
.setTitle(e + `'s profile`)
.setDescription('**Stats in games**\n' +
'🃏 Blackjack wins: ' + await bot.bjWin(m.id) + `\n` +
'🎰 Slots wins: ' + await bot.sWin(m.id) + `\n` +
'⌨️ Fast Type wins: ' + await bot.fsWin(m.id) + `\n` +
'👊 Fight wins: ' + await bot.fWin(m.id) + `\n` +
'🤔 Shuffle Guess wins: ' + await bot.sgWin(m.id) + `\n` +
'❌ Tic Tac Toe wins: ' + await bot.tttWin(m.id) + `\n` +
'❓ Trivia wins: ' + await bot.tWin(m.id) + `\n` +
`In-Total wins: ${await bot.bjWin(m.id) + await bot.sWin(m.id) + await bot.fsWin(m.id) + await bot.fWin(m.id) + await bot.tttWin(m.id) + await bot.tWin(m.id) + await bot.sgWin(m.id)}`,
)
.addField('Stats in activity', 
'👀 Commands Used: ' + await bot.cmdsUSED(m.id) + `\n`,
true)
message.channel.send(gambleEmbed);
  }}