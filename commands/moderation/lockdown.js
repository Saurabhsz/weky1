const Discord = module.require("discord.js");
module.exports = {
    name: "lockdown",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..lockdown',
    cooldown: 6, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["MANAGE_CHANNELS"],
    async execute(bot, message, args) {
      const { MessageEmbed } = require('discord.js');
              const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
              if(!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");
              if (!message.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send('I don\'t have permission to use that command').then(m => m.delete({timeout: 5000}))
              if(!args[0]) return message.reply(`Please type ..lockdown on or ..lockdown off.`)
              if (args[0] === 'on') {
                  channels.forEach(channel => {
                      channel.updateOverwrite(message.guild.roles.everyone, {
                          SEND_MESSAGES: false
                      }).then(() => {
                          channel.setName(channel.name += `🔒`)
                      })
                  })
                  return message.channel.send('Successfully locked all channels.');
              } else if (args[0] === 'off') {
                  channels.forEach(channel => {
                      channel.updateOverwrite(message.guild.roles.everyone, {
                          SEND_MESSAGES: true
                      }).then(() => {
                              channel.setName(channel.name.replace('🔒', ''))
                          }
                      )
                  })
                  return message.channel.send('Successfully unlocked all channels.')      
}
}
}