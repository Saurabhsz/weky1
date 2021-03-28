const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')
const moment = require('moment');
module.exports = {
  name: "suggest",
  aliases: ["suggestion"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..suggest',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {

const channel = bot.channels.cache.get('811226235585822753')

if (!args[0]) return message.reply('No suggestion xd')
channel.send(`<@&821723745345470504>`)
        channel.createWebhook(message.author.username, {
            avatar: message.author.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(new Discord.MessageEmbed()
            .setTitle(`New suggestion!`)
            .setDescription(args.slice(0).join(" ")))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
})
}
}