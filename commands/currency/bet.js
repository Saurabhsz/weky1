const Discord = require('discord.js')
module.exports = {
  name: "bet",
  aliases: ["gamble"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..beg',
  cooldown: 6, //seconds(s)
  cooldowny: 3,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id
    const Money = require('../../schemas/Money')
    const rndom = Math.floor(Math.random() * 100) + 1; // get a random num between 1 and 100
      const hance = rndom > 0 && rndom < 40; // the conidtion which is the chance
      if(message.content.includes(',')) return message.channel.send(`In your message CAN'T be . and ,`)

    var number = parseFloat(args[0])
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

  if (hance) {
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
      let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
      .addField(`**You won!**`,
                       `Gambled: ${number}; Won: ${number*okk}; Multi: x${okk}`,
                       `**New balance: ${data.Wallet}**`)
      .setColor(`GREEN`)
      .setFooter(`Winner`)
    message.channel.send(embed)
    data.save()
  }
  }
});
              }
              }
