const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports = {
  name: "deposit",
  aliases: ["dep"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..deposit',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    var num = parseInt(args[0])
    if (num.isNaN) return message.channel.send("Thats not a valid number");
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
  } else if(num > data.Wallet) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  }
  if(num > data.space){
   return message.channel.send(`Looks like your bank is full :) go get some scripts`)
  } else {
    data.Wallet -= num;
   data.Bank += num;
   data.save();
   message.channel.send("Deposited **" + num + '** coins.')
}
});
}
}