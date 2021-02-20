const { MessageManager } = require('discord.js')
const prefix = require('../botsettings.json')

module.exports = async (bot, message) => {
bot.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    member: message.member,
    image: message.attachments.first() ? message.attachments.first().proxyURL : null
})
}
