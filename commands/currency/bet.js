const Discord = require('discord.js')
module.exports = {
  name: "bet",
  aliases: ["gamble"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..beg',
  cooldown: 3, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    var resp = '';
    if(data.bun != 0) resp += `<:bready:820948539823226901>`

    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../../schemas/Money')
      if(message.content.includes(',')) return message.channel.send(`In your message CAN'T be . and ,`)

    var number = Math.round(parseFloat(args[0]))
    if(!number) return message.channel.send(`Please specify how much you want to bet!`)
    if (number.isNaN) return message.channel.send("Thats not a valid number");
Money.findOne({
  id: targetId
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: targetId
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else {
    if(number > data.Wallet) {
        return message.channel.send("You dont have that much money why you bad at me bro :/");
    }
    if(number < 100){
      return message.channel.send("You can gamble only 100 above coins")
  }
  if(number > 500000){
      return message.channel.send(`You can't gamble more than 500,000 coins.`)
  }
if(0 >= data.bun){
  const random = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
  let rate = 65;
  if (rate < random) {
    data.Wallet -= number;    
    let embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
    .addField(`**You lost!**`,
                `Lost: ${number}`,
                     `**New balance: ${data.Wallet}**`)
    .setColor(`RED`)
    .setFooter(`Loser`)
  message.channel.send(embed)
    data.save(); 
  } else {
    const br = Math.floor(Math.random() * (70 - 50 + 1) + 50)
const brr = `0.${br}`
    data.Wallet += Math.round(number*brr)
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                  `**Won**: ${Math.round(number*brr)}\n**Multiplier**: ${br}%\n**New balance**: ${data.Wallet}\n**Power-ups**: ${resp}`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
    
  }

  }else if(data.bun > 0){
    const random = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
    let rate = 30;
    if (rate < random) {
      data.Wallet -= number;    
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You lost!**`,
                  `Lost: ${number}`,
                       `**New balance: ${data.Wallet}**`)
      .setColor(`RED`)
      .setFooter(`Loser`)
    message.channel.send(embed)
      data.save(); 
    } else {
    const br = Math.floor(Math.random() * (120 - 50 + 1) + 50)

    if(br > 100 || br === 100){
      const brr = 100
    data.Wallet += Math.round(number*br/brr)
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                  `**Won**: ${Math.round(number*br/brr)}\n**Multiplier**: ${br}%\n**New balance: ${data.Wallet}**\n**Power-ups**: ${resp}`)
                  .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
    } else {
const brr = `0.${br}`
    data.Wallet += Math.round(number*brr)
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                  `**Won**: ${Math.round(number*brr)}\n**Multiplier**: ${br}%\n**New balance**: ${data.Wallet}\n**Power-ups**: ${resp}`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
    }
  
    }
  }
}
});

              }
              }
