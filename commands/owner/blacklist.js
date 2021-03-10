
const { MessageEmbed } = require('discord.js');//require the packages
module.exports = {
  name: "blacklist",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..blacklist',
  cooldown: 0, //seconds(s)
  guarded: true, //or false
  permissions: ["BOT_OWNER"],
  async execute(bot, message, args) {
        if(message.author.id != 778518819055861761) return message.channel.send("This can only be ran by the bot owner!") //add your id without quotes
        const target = message.mentions.members.first()
        const targetId = target.id
        const black = require('../../schemas/Ban')
        black.findOne({
          id: targetId
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
            newD = new black({
              id: targetId
            });
            newD.save();
            if(!target) return message.channel.send("You forgot to specify a user!")
  

            const embed = new MessageEmbed()
            .setTitle('IMPORTANT!')
            .setDescription('**You have been blacklisted from Weky**, sad.\nIf you dont know why and you think there was an error, please friend and dm ImFace#5652')
            .setTimestamp()
            target.send(embed)
    
            message.channel.send(`${target} is now blacklisted`)
            
          } else {
            if(!target) return message.channel.send("You forgot to specify a user!")
  

            const embed = new MessageEmbed()
            .setTitle('IMPORTANT!')
            .setDescription('**You have been blacklisted from Weky**, sad.\nIf you dont know why and you think there was an error, please friend and dm ImFace#5652')
            .setTimestamp()
            target.send(embed)
    
            message.channel.send(`${target} is now blacklisted`)

          }
        });
}
}