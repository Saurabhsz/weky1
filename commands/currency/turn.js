
                       /* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const config = require('../../util/config.json');

module.exports.run = async (client, message, args, utils, data) => {
const inventory = require("../../schemas/inventory")
    inventory.findOne({ User: message.author.id }, async (err, ata) => {
        const quiz = require('../../turn.json');
    const randomCoins = Math.floor(Math.random() * 1300) + 200;
            if(0>=ata.Laptop) {
        return message.channel.send(`You dont have any laptops, sorry dude!`);
        } else {
                const repp = [
                    `You went to go to the anti-virus website but got on the wrong site, you didnt got anything`,
                    `You went to fly on Minecraft but... got.....down somehow, no coins`,
                    `You failed a checkmark test in DBD, so nah,  no coins`,
                    `You died in minecraft,which means your alive in real life, but no coins`,
                    `You played on your PC on Weky and got **${randomCoins}** coins for using your laptop`,
                    `Nani, you got **${randomCoins}** coins by just downloading Malware Anti Corona VIRUS`,
                    `You passed the human verification and got **${randomCoins}** coins for trying their new system.`,
                    `You just broke a card and got **${randomCoins}** coins.. i wonder who's card`
               ]
               var num = Math.floor(Math.random() * repp.length);
               const answerspost = repp[num]
               if(num != 0 && num != 1 && num != 2 && num != 3) {
                  bot.add(message.author.id, randomCoins, message)
                   }
               const filter = response => {
                   return quiz.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
               }
               message.channel.send(quiz.question).then(() => {
                   message.channel.awaitMessages(filter, { max: 1, time: 6000, errors: ['time'] })
                           .then(collected => {
                           message.channel.send(`${answerspost}`);
                       })
                       .catch(collected => {
                           message.channel.send('C\'mon u didnt answer bruh');
                       })})}})
};

module.exports.help = {
    aliases: ['tn'],
      name: 'turn',
      description: 'Turning laptop on.',
      usage: config.prefix + 'turn',
  };

module.exports.config = {
	args: false,
	restricted: false,
	category: 'currency',
	disable: false,
	cooldown: 45000,
};