const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "slots",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..slots',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../../schemas/Money')
      if(message.content.includes(',')) return message.channel.send(`In your message CAN'T be . and ,`)

    var number = parseFloat(args[1])
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
    const arrray = [
      "0.1",
      "0.2",
      "0.3",
      "0.4",
      "0.5",
      "0.9",
      "1.0",
      "1.1",
      "1.2",
      "1.3",
      "1.4",
      "1.5"]
    const r =  parseInt(Math.floor(Math.random() * arrray.length));
    const okk = arrray[r]
    data.Wallet += number*okk;
    let ar = ["😳","💰","🔫", "😘"]
    let a = Math.floor(Math.random() * ar.length)
    let a1 = ar[a]
    let b = Math.floor(Math.random() * ar.length)
    let b1 = ar[b]
    let c = Math.floor(Math.random() * ar.length)
    let c1 = ar[c]
    let embed = new Discord.MessageEmbed()
    if(a === b && b=== c){
      data.Wallet += number*3
      data.save();
      embed.setColor(`GREEN`).addField(`${message.author.username}'s game`,`\n\nJACKPOT <:trollpog:815973183378161675>\n\n`
      +`**|** ${a1} **|** ${b1}** | **${c1} **|**`).addField(`Details:`,`Won: ${number*3};\nGambled: ${number};\nMupliplier: x3\nNew balance: ${data.Wallet}`).setFooter(`Winner winner`)
      message.reply(embed)
    } else if(a===b && a!=c){
      data.Wallet += number*okk
      data.save();
      embed.setColor(`GREEN`).addField(`${message.author.username}'s game`,`
      **|** ${a1} **|** ${b1}** | **${c1} **|**`).addField(`Details:`,`Won: ${number*okk};\nGambled: ${number};\nMupliplier: x${okk}\nNew balance: ${data.Wallet}`).setFooter(`Winner winner`)
      message.reply(embed)

    }else if(b===c && b != a){
      data.Wallet += number*okk
      data.save();
      embed.setColor(`GREEN`).addField(`${message.author.username}'s game`,`
      **|** ${a1} **|** ${b1}** | **${c1} **|**`).addField(`Details:`,`Won: ${number*okk}\nGambled: ${number};\nMupliplier: x${okk}\nNew balance: ${data.Wallet}`).setFooter(`Winner winner`)
      message.reply(embed)

    }else if(a === c && a != c){
      data.Wallet += number*okk
      data.save();
      embed.setColor(`GREEN`).addField(`${message.author.username}'s game`,`
      **|** ${a1} **|** ${b1}** | **${c1} **|**`).addField(`Details:`,`Won: ${number*okk};\nGambled: ${number};\nMupliplier: x${okk}\nNew balance: ${data.Wallet}`).setFooter(`Winner winner`)
      message.reply(embed)

    }else{
      data.Wallet -= number
      data.save();
      embed.setColor(`RED`).addField(`${message.author.username}'s game`,`
      **|** ${a1} **|** ${b1}** | **${c1} **|**`).addField(`Details`,`Lost : ${number}`).setFooter(`Loser loser`)
          message.reply(embed)
         data.save();
      }
  }
});
}
}