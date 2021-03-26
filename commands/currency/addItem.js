const Discord = require('discord.js')
module.exports = {
  name: "e",
  aliases: [],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..addItem',
  cooldown: 4, //seconds(s)
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    console.log(message.author.username + ` used this command`)
const item = args[0]

      const member = message.mentions.members.first()
      if(!member) return message.channel.send(`No user specified`)
      const number = parseInt(args[1])
        if(!number) return message.reply(`No amount`)
        message.reply(`Added to ${member.username} ${number} ${item} :)`)
        console.log(item + ` ` + number + ` ` + member.username)
        bot.addItem(member.id, item, number)
  }}