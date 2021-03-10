
const { MessageEmbed } = require('discord.js');//require the packages
module.exports = {
  name: "setPremium",
  aliases: ["addPremium"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..daily',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
          if(message.author.id != 778518819055861761) return message.channel.send("This can only be ran by the bot owner!") //add your id without quotes
        const target = message.mentions.users.first();
        const targetId = target.id
        const black = require('../../schemas/premium')
        black.findOne({
          id: targetId
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
            newD = new black({
              id: targetId,
              username: target.username
            });
            newD.save();
            if(!target) return message.channel.send("You forgot to specify a user!")
  

            const embed = new MessageEmbed()
            .setTitle('IMPORTANT!')
            .setDescription('Congratulations, you have been added as a Premium User to our bot!')
            .setColor("YELLOW")
            .setTimestamp()
            target.send(embed)
    
            message.channel.send(`${target} is now VIP :smirk:`)
            
          } else {
            if(!target) return message.channel.send("You forgot to specify a user!")
  

            const embed = new MessageEmbed()
            .setTitle('IMPORTANT!')
            .setDescription('Congratulations, you have been added as a Premium User to our bot!')
            .setColor("YELLOW")
            .setTimestamp()
    
            message.channel.send(`${target} is now a premium user!`)

          }
        });
}
}