
const { MessageEmbed } = require('discord.js');//require the packages
module.exports.config = {
  name: "removePremium",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..removePremium',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["BOT_OWNER"],
  async execute(bot, message, args) {
        if(message.author.id != 778518819055861761) return message.channel.send("This can only be ran by the bot owner!") //add your id without quotes
        const target = message.mentions.users.first();
        const targetId = target.id
        const black = require('../../schemas/premium')
        black.deleteOne({
          id: targetId
        }, (err,data) => {
          if(err) console.log(err);
          if(!data){
message.channel.send(`This user isnt even premium :weary:`)
            
          } else {
            newD = new black({
              });
            if(!target) return message.channel.send("You forgot to specify a user!")
  

            const embed = new MessageEmbed()
            .setTitle('IMPORTANT!')
            .setDescription('You have been removed from the Premium Users list')
            .setColor("RED")
            .setTimestamp()
    
            message.channel.send(`${target} is now a normal user :pensive:`)

          }
        });
}
}