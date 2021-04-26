
/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
    var num = parseFloat(args[0])
    const Money = require('../../schemas/Money')
Money.findOne({
  id: message.author.id
}, (err,ata) => {
  if(err) console.log(err);
  if(!ata){
    newD = new Money({
      id: message.author.id
    });
  } else if(num >= ata.Wallet) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  }
  const thesame = ata.Bank >= ata.space
  if(thesame){
    ata.Wallet += ata.Bank - ata.space
    ata.Bank -= ata.Bank - ata.space
    ata.save()
  }else if(Math.round(num) >= Math.round(ata.space)){
      return message.channel.send(`Looks like your bank is full :) go get some scripts`)
     } else {
      if(args[0] === 'all' && isNaN(num)) {
if(ata.space < Math.round(ata.Wallet)) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
        ata.Bank += Math.round(ata.Wallet)
        message.channel.send("Deposited **" + Math.round(ata.Bank) + '** coins.')
        ata.Wallet -= Math.round(ata.Wallet)
        ata.save()
        } else if(args[0] === 'half' && isNaN(num)){
    if(ata.space < Math.round(ata.Wallet/2)) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
            ata.Bank += Math.round(ata.Wallet/2)
            message.channel.send("Deposited **" + Math.round(ata.Wallet/2) + '** coins.')
            ata.Wallet -= Math.round(ata.Wallet/2)
            ata.save()
            } else if(isNaN(num)){
              return message.channel.send(`You didnt said \`all\`, \`half\` or ,\`number\``)

        } else if(!isNaN(num)){
        if(Math.round(num) >= Math.round(ata.space)){
          return message.channel.send(`Looks like your bank is full :) go get some scripts`)
        }else if(thesame){
          ata.Wallet += ata.Bank - ata.space
          ata.Bank -= ata.Bank - ata.space
          ata.save()
        } else {
          if(Math.round(num) >= ata.space || ata.space === ata.Bank) return message.channel.send(`You cannot deposit that much coins, your bank is full`)
          ata.Wallet -= Math.round(num)
          ata.Bank += Math.round(num)
          ata.save();
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