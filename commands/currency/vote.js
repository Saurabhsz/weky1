module.exports = {
    name: "vote",
    aliases: [],
    dmOnly: false,
    guildOnly: true,
    usage: '..vote',
    cooldown: 6,
    cooldowny: 3,
    guarded: true,
    permissions: ["NONE"],
    async execute(bot, message, args) {
        var eh = ['https://cdn.discordapp.com/attachments/830003681994473511/830815206183272448/6.gif'
        ,'https://cdn.discordapp.com/attachments/830003681994473511/830815208070840375/1.gif'
    ,'https://cdn.discordapp.com/attachments/830003681994473511/830815210096820294/2.gif'
    ,'https://cdn.discordapp.com/attachments/830003681994473511/830815212532793434/3.gif',
    'https://cdn.discordapp.com/attachments/830003681994473511/830815217755226122/5.gif',
    'https://cdn.discordapp.com/attachments/830003681994473511/830815215221211166/4.gif']
    const c = Math.floor(Math.random() * eh.length)
      const Discord = require('discord.js')
     message.reply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.username+`#`+message.author.discriminator, message.member.user.displayAvatarURL())
        .setTitle(`Vote for me!`)
        .setDescription(`[TOP.GG](https://top.gg/bot/809496186905165834/vote) \n**•** <:gotcha_box:816990104803475457> 1 Gotcha Box\n**•** <:spacescript:814122006437167134> 3 Space Scripts\n **•** :coin: 30,000 coins`)
        .setThumbnail(eh[c])
        .addField("Note:", `You need to join our [official server](https://discord.gg/Sr2U5WuaSN) to get the rewards.`)
        .setFooter('xd')
        .setTimestamp()
      )
}}