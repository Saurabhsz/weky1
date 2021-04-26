
        
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
    newD.save();
    let user = message.guild.members.cache.get(message.author.id);
    user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
  } else if(num > data.Bank) {
    return message.channel.send("You dont have that much money why you bad at me bro :/");
  }
      if(args[0] === 'all' && isNaN(num)) {
        data.Wallet += Math.round(data.Bank)
        message.channel.send("Withdrawn **" + Math.round(data.Bank) + '** coins.')
        data.Bank -= Math.round(data.Bank)
        data.save()
        } else if(args[0] === 'half' && isNaN(num)){
            data.Wallet += Math.round(data.Bank/2)
            message.channel.send("Withdrawn **" + Math.round(data.Bank/2) + '** coins.')
            data.Bank -= Math.round(data.Bank/2)
            data.save()
            } else if(isNaN(num)){
              return message.channel.send(`You didnt said \`all\`, \`half\` or ,\`number\``)

        } else if(!isNaN(num)){
          data.Bank -= Math.round(num)
          data.Wallet += Math.round(num)
          data.save();
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