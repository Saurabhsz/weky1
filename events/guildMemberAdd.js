const Discord = require('discord.js');

module.exports = async (bot, member) => {
    if(member.guild.id !== '830003680983646278') return
    const Canvacord = require('canvacord')
    const image = new Canvacord.Welcomer()
      .setUsername(member.user.username)
      .setDiscriminator(member.user.discriminator)
      .setMemberCount(member.guild.memberCount)
      .setGuildName(member.guild.name)
      .setAvatar(member.user.displayAvatarURL({ format: "jpg", size: 1024 }))
      .setColor("border", "#00FF00")
      .setColor("username-box", "#00FF00")
      .setColor("discriminator-box", "#00FF00")
      .setColor("message-box", "#00FF00")
      .setColor("title", "#00FF00")
      .setColor("avatar", "#00FF00")
      .setBackground("https://wallpapercave.com/wp/wp7951233.jpg")
    
    image.build()
      .then(data => {
        bot.channels.cache.get('830003681402683415').send(new Discord.MessageAttachment(data, 'welcome-image.png'))
      })
};