const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
        const member = message.author
        if (!member.hasPermission('MANAGE_MESSAGES')) {
                message.reply(`Get manage messages permission and then come back lmao.`)
        }
let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(2).join(' ');
if(!pollChannel) return message.reply(`Please mention the channel where the poll you want to be`)
if(!pollDescription) return message.reply(`What you want to put in this poll :D?`)
        let embedPoll = new Discord.MessageEmbed()
        .setTitle(`😲 ${message.author.username} Made a new POLL`)
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
}
        module.exports.config = {
            name: "poll",
            aliases: []
        }
        