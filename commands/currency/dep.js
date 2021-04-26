
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
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
  } else if(num >= data.Wallet) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  }
  const thesame = data.Bank >= data.space
  if(thesame){
    data.Wallet += data.Bank - data.space
    data.Bank -= data.Bank - data.space
    data.save()
  }else if(Math.round(num) >= Math.round(data.space)){
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
        if(Math.round(num) >= Math.round(data.space)){
          return message.channel.send(`Looks like your bank is full :) go get some scripts`)
        }else if(thesame){
          data.Wallet += data.Bank - data.space
          data.Bank -= data.Bank - data.space
          data.save()
        } else {
          if(Math.round(num) >= data.space || data.space === data.Bank) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
          data.Wallet -= Math.round(num)
          data.Bank += Math.round(num)
          data.save();
          message.channel.send("Deposited **" + Math.round(num) + '** coins.')
        }
      }
}
});
};

module.exports.help = {
  aliases : [],
	name: 'deposit',
	description: 'Depositing in bank your coins.',
	usage: config.prefix + 'dep {amount OR all OR half}',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 3000,
};