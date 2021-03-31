const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "rob",
  aliases: ["steal"],
  dmOnly: false,
  guildOnly: true,
  usage: '..rob @user',
  cooldown: 50,
  cooldowny: 30,
  guarded: true,
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const membe = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
    if(!membe) return message.channel.send(`Who,The fk, the lord,wants to rob :rolling_eyes:`)
if(membe.id === message.author.id) return message.reply(`Learn what you cant rob urself means`);
var ran;
    if(100 >= await bot.bal(membe.id)) {return message.reply(`This kid don't even have 100 coins.`)}else
    if(250 >= await bot.bal(message.author.id)) {return message.reply(`You need 250 coins to rob mf.`)}else {
    var num;
    const inventory = require("../../schemas/inventory")
            inventory.findOne({ User: message.author.id }, async (err, data) => {
    if(0 >= data.EnergyBolt){
        ran = Math.floor(Math.random() * 12)
    } else {
        ran = Math.floor(Math.random() * 20)
    }
    if(ran < 2){
        num = await bot.bal(membe.id)
        message.reply(`You stole ALL THEIR MONEYYY🤑🤑🤑🤑🤑, in total **${num}** coins, GG.`)
        bot.add(message.author.id, num)
        bot.rmv(membe.id, num)
    } else if(ran < 3){
        num = await bot.bal(membe.id)/2
        message.reply(`You stole a part of their money💸💸, in total **${num}** coins, gg bruh.`)
        bot.add(message.author.id, num)
        bot.rmv(membe.id, num)
    } else if(ran < 5){
        num = Math.floor(Math.random() * await bot.bal(membe.id)) + 100
        message.reply(`You stole some money💰💰💰, in total **${num}** coins, gg bruh.`)
        bot.add(message.author.id, num)
        bot.rmv(membe.id, num)
    } else {
            message.reply(`You paid 250 coins for nothing, sad.`)
            bot.rmv(message.author.id, 250)
            bot.add(membe.id, 250)
        }})}}}