const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
        let pollDescription = args.slice(2).join(' ');
if(!pollDescription) return message.reply(`What you want to put in this poll :D?`)
        let embedPoll = new Discord.MessageEmbed()
        .setTitle(`😲 ${message.author.username} Made a new POLL`)
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await message.channel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
}
        module.exports.config = {
            name: "poll",
            aliases: []
        }
        