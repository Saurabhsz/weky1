const usedCommand = new Set();
const Discord = require('discord.js')
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "turn",
  aliases: ["tn"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..turn',
  cooldown: 35, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
        const quiz = require('../../turn.json');
    const randomCoins = Math.floor(Math.random() * 1300) + 200;
    const Money = require('../../schemas/Money')
    Money.findOne({
        id: message.author.id
    },
     (err, data) => {
        if(err) console.log(err);
        if(!data){
        const newD = new Money({
            id: message.author.id
        })
        newD.save();
        let user = message.guild.members.cache.get(message.author.id);
        user.user.send(`Hello , **thanks for starting using Weky Bot**!\n You got 100 coins as reward for starting. Do \`/help\` for more commands about our currency system.`)
        } else {
            if(0 >= data.Laptop) {
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
                   data.Wallet += randomCoins
                   data.save();
                   }

                   if(0 > data.Laptop) {return message.channel.send(`You dont have any laptops, sorry dude!`);} else {
               }
               const filter = response => {
                   return quiz.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
               };
               
               message.channel.send(quiz.question).then(() => {
                   message.channel.awaitMessages(filter, { max: 1, time: 6000, errors: ['time'] })
                           .then(collected => {
                           message.channel.send(`${answerspost}`);
                       })
                       .catch(collected => {
                           message.channel.send('C\'mon u didnt answer bruh');
                       });
               });
            }
           
        }
    })

}
}

module.exports.config = {
    name: "turn",
    description: "using ur laptop for coins be like",
    usage: "..turn",
    accessableby: "Members",
    aliases: ["tn"]
}