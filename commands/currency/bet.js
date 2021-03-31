const Discord = require('discord.js')
module.exports = {
  name: "bet",
  aliases: ["gamble"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..beg',
  cooldown: 9, //seconds(s)
  cooldowny: 6,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    var number = Math.round(parseFloat(args[0]))
    if(!number) return message.channel.send(`Please specify how much you want to bet!`)
    if (number.isNaN) return message.channel.send("Thats not a valid number");
    if(number > await bot.bal(message.author.id)) {
        return message.channel.send("You dont have that much money why you bad at me bro :/");
    }
    if(number < 100){
      return message.channel.send("You can gamble only 100 above coins")
  }
  if(number > 500000){
      return message.channel.send(`You can't gamble more than 500,000 coins.`)
  }
  const inventory = require("../../schemas/inventory")
            inventory.findOne({ User: message.author.id }, async (err, data) => {
if(0 >= data.BunEffect){
  var resp = '';
  if(data.BunEffect !== 0) resp += `<:bready:820948539823226901>`

  const random = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
  let rate = 65;
  if (rate < random) {
    bot.rmv(message.author.id, number)    
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
    .addField(`**You lost!**`,
                `Lost: ${number}`,
                     `**New balance: ${await bot.bal(message.author.id)}**`)
    .setColor(`RED`)
    .setFooter(`Loser`)
  message.channel.send(embed)
  } else {
    const br = Math.floor(Math.random() * (70 - 50 + 1) + 50)
const brr = `0.${br}`
    bot.add(message.author.id, Math.round(number*brr))
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                  `**Won**: ${Math.round(number*brr)}\n**Multiplier**: ${br}%\n**New balance**: ${await bot.bal(message.author.id)}\n**Power-ups**: ${resp}`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
  }}else if(bot.item(message.author.id, "BunEffect") !== 0){
    var resp = '';
    if(bot.item(message.author.id, "BunEffect") !== 0) resp += `<:bready:820948539823226901>`
    const random = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
    let rate = 70;
    if (rate < random) {
      bot.rmv(message.author.id, number)
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You lost!**`,
                  `Lost: ${number}`,
                       `**New balance: ${await bot.bal(message.author.id)}**`)
      .setColor(`RED`)
      .setFooter(`Loser`)
    message.channel.send(embed)
    } else {
    const br = Math.floor(Math.random() * (120 - 50 + 1) + 50)

    if(br > 100 || br === 100){
      const brr = 100
    bot.add(message.author.id, Math.round(number*br/brr))
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                  `**Won**: ${Math.round(number*br/brr)}\n**Multiplier**: ${br}%\n**New balance: ${await bot.bal(message.author.id)}**\n**Power-ups**: ${resp}`)
                  .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    } else {
const brr = `0.${br}`
bot.add(message.author.id, Math.round(number*brr)) 
let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
      `**Won**: ${Math.round(number*brr)}\n**Multiplier**: ${br}%\n**New balance**: ${await bot.bal(message.author.id)}\n**Power-ups**: ${resp}`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
}}}})}}
