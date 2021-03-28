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
        channel.createWebhook(message.author.username, {
            avatar: message.author.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(`kek` + new Discord.MessageEmbed()
            .setTitle(`New suggestion!`)
            .setDescription(args.slice(0).join(" "))).then( function() {
              webhook.react(`<:bad:821393174277783641>`)
              webhook.react(`<:good:821393129999171626>`)})
            setTimeout(() => {
                webhook.delete()
            }, 3000)
})
}
}