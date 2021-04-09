const Discord = require('discord.js')
module.exports = {
  name: "rmv",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..rmv',
  cooldown: 4, //seconds(s)
  cooldown: 1,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    if(message.author.id === "778518819055861761" || message.author.id === "700988024770789376" || message.author.id === "619498919763640330"){
      const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(1).join(" ") || x.user.username === args[1])
      if(!member) return message.channel.send(`No user specified`)
      const number = Math.round(parseInt(args[0]))
        if(!number) return message.reply(`No amount`)
        bot.channels.cache.get("830003681638350859").send(new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setDescription(`Removed from ${member} some coins`)
        .setFooter(number)
        .setColor("RED"))
        message.reply(`Removed from ${member} ${number} coins :)`)
        bot.rmv(member.id, number)
}else{return}}}