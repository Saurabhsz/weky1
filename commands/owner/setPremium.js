
const { MessageEmbed } = require('discord.js');//require the packages
module.exports = {
  name: "setPremium",
  aliases: ["addPremium"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..setPremium',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["BOT_OWNER"],
  async execute(bot, message, args) {
          if(message.author.id != 778518819055861761) return message.channel.send("This can only be ran by the bot owner!") //add your id without quotes
        const target = message.mentions.users.first();
        const targetId = target.id
        if(!target) return message.channel.send("You forgot to specify a user!")
        const black = require('../../schemas/Money')
        black.findOne({
          id: targetId
        }, (err,data) => {
          if(err) console.log(err);


            const embed = new MessageEmbed()
            .setTitle('IMPORTANT!')
            .setDescription('Congratulations, you have been added as a Premium User to our bot!')
            .setColor("YELLOW")
            .setTimestamp()
    
            message.channel.send(`${target} is now a premium user!`)
            target.send(embed)
            data.premium += 1
            data.save()
        });
}
}