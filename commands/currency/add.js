const Discord = require('discord.js')
module.exports = {
  name: "add",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..add',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    if(message.author.id === "778518819055861761" || message.author.id === "700988024770789376" || message.author.id === "619498919763640330"){
      const member = message.mentions.members.first()
      if(!member) return message.channel.send(`No user specified`)
      const number = Math.round(parseInt(args[0]))
        if(!number) return message.reply(`No amount`)
        bot.channels.cache.get("824272046174765096").send(new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setDescription(`Added to ${member.id} some coins`)
        .setFooter(number)
        .setColor("GREEN"))
        message.reply(`Added to ${member.username} ${number} coins :)`)
        bot.add(member.id, number)
}else{return}}}