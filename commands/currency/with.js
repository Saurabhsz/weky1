
        
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
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else if(num > ata.Bank) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  }
      if(args[0] === 'all' && isNaN(num)) {
        ata.Wallet += Math.round(ata.Bank)
        message.channel.send("Withdrawn **" + Math.round(ata.Bank) + '** coins.')
      ata.Bank -= Math.round(ata.Bank)
        ata.save()
        } else if(args[0] === 'half' && isNaN(num)){
            ata.Wallet += Math.round(ata.Bank/2)
            message.channel.send("Withdrawn **" + Math.round(ata.Bank/2) + '** coins.')
            ata.Bank -= Math.round(ata.Bank/2)
            ata.save()
            } else if(isNaN(num)){
              return message.channel.send(`You didnt said \`all\`, \`half\` or ,\`number\``)

        } else if(!isNaN(num)){
          ata.Bank -= Math.round(num)
          ata.Wallet += Math.round(num)
          ata.save();
          message.channel.send("Withdrawn **" + Math.round(num) + '** coins.')
        }})
};

module.exports.help = {
    aliases: ['with'],
      name: 'withdraw',
      description: 'Withdrawing money from bank.',
      usage: config.prefix + 'withdraw ~amount~',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 5000,
};