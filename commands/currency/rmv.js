const Discord = require('discord.js')
module.exports = {
  name: "rmv",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..rmv',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    if(message.author.id === "778518819055861761" || message.author.id === "700988024770789376" || message.author.id === "619498919763640330"){
      const member = message.mentions.members.first()
      if(!member) return message.channel.send(`No user specified`)
      const number = parseInt(args[0])
        if(!number) return message.reply(`No amount`)
        bot.channels.cache.get("824272046174765096").send(new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setDescription(`Removed from ${member} some coins`)
        .setFooter(number)
        .setColor("RED"))
        message.reply(`Removed from ${member} ${number} coins :)`)
        bot.rmv(member.id, number)
}else{return}}}