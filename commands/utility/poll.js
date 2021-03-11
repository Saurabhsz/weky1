const Discord = require('discord.js')
module.exports = {
        name: "poll",
        aliases: [],
        dmOnly: false, //or false
        guildOnly: true, //or false
        usage: '..poll',
        cooldown: 4, //seconds(s)
        cooldowny: 0,
        guarded: true, //or false
        permissions: ["NONE"],
        async execute(bot, message, args) {
        let pollDescription = args.slice(0).join(' ');
if(!pollDescription) return message.reply(`What you want to put in this poll :D?`)
        let embedPoll = new Discord.MessageEmbed()
        .setTitle(`😲 ${message.author.username} Made a new POLL`)
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await message.channel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
}
}