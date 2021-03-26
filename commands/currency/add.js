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
    console.log(message.author.username + ` used this command`)

      const member = message.mentions.members.first()
      if(!member) return message.channel.send(`No user specified`)
      const number = parseInt(args[1])
        if(!number) return message.reply(`No amount`)
        message.reply(`Added to ${member.username} ${number} coins :)`)
        bot.add(member.id, number)
  }}