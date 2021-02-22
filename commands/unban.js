
const { MessageEmbed } = require('discord.js');//require the packages
module.exports.run = async (bot, message, args) => {
        if(message.author.id != 778518819055861761) return message.channel.send("This can only be ran by the bot owner!") //add your id without quotes
        const target = message.mentions.users.first();
        const targetId = target.id
        const black = require('../schemas/Ban')
        black.findOne({
          id: targetId
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
            
            message.channel.send(`${target} was not even banned from Weky but ok.`)
            
          } else {
            if(!target) return message.channel.send("You forgot to specify a user!")
  

            const embed = new MessageEmbed()
            .setTitle('IMPORTANT!')
            .setDescription('**You have been unbanned from Weky**, nice.\nTake care, the rules are rules.')
            .setTimestamp()
            target.send(embed)
    
            message.channel.send(`${target} is now unbanned`)

          }
        });
}
module.exports.config = {
  name: "unban",
  aliases: []
}