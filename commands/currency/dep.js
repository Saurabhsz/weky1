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
    const Money = require('../../schemas/Money')
Money.findOne({
  id: message.author.id
}, (err,data) => {
  if(err) console.log(err);
  if(!data){
    newD = new Money({
      id: message.author.id
    });
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else if(num >= data.Wallet) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  }
  const thesame = data.Bank == data.space
  if(thesame){
    return message.channel.send(`Looks like your bank is full :) go get some scripts`)
  }else if(Math.round(num) > Math.round(data.space)){
      return message.channel.send(`Looks like your bank is full :) go get some scripts`)
     } else {
      if(args[0] === 'all' && isNaN(num)) {
if(data.space < Math.round(data.Wallet)) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
        data.Bank += Math.round(data.Wallet)
        message.channel.send("Deposited **" + Math.round(data.Bank) + '** coins.')
        data.Wallet -= Math.round(data.Wallet)
        data.save()
        } else if(args[0] === 'half' && isNaN(num)){
    if(data.space < Math.round(data.Wallet/2)) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
            data.Bank += Math.round(data.Wallet/2)
            message.channel.send("Deposited **" + Math.round(data.Wallet/2) + '** coins.')
            data.Wallet -= Math.round(data.Wallet/2)
            data.save()
            } else if(isNaN(num)){
              return message.channel.send(`You didnt said \`all\`, \`half\` or ,\`number\``)

        } else if(!isNaN(num)){
          if(data.space < Math.round(num)) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
          data.Wallet -= Math.round(num)
          data.Bank += Math.round(num)
          data.save();
          message.channel.send("Deposited **" + Math.round(num) + '** coins.')
        } 
}
});
}
}