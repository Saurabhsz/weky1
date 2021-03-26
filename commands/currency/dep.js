const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..deposit',
  cooldown: 4, //seconds(s)
  cooldowny: 1,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    var num = parseFloat(args[0])
if(num > bot.bal(message.author.id)) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  }
  if(bot.space(message.author.id) < Math.round(num) || bot.space(message.author.id) == bot.Bank(message.author.id)) return message.channel.send(`Looks like your bank is full :) go get some scripts`);
if(args[0] === 'all' && num.isNaN) {
if(data.space < Math.round(data.Wallet)) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
data.Bank += Math.round(data.Wallet)
message.channel.send("Deposited **" + Math.round(data.Bank) + '** coins.')
data.Wallet -= Math.round(data.Wallet)
} else if(args[0] === 'half' && num.isNaN){
if(bot.space(message.author.id) < bot.bal(message.author.id)/2) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
bot.addBankMoney(message.author.id, bot.bal(message.author.id)/2)
message.channel.send("Deposited **" + bot.bal(message.author.id)/2 + '** coins.')
bot.rmv(message.author.id, Math.round(data.Wallet/2))
} else if(num.isNaN){
return message.channel.send(`You didnt said \`all\`, \`half\` or ,\`number\``)
} else if(!num.isNaN){
bot.rmv(message.author.id, num)
bot.addBankMoney(message.author.id, num)
message.channel.send("Deposited **" + Math.round(num) + '** coins.')
}}}