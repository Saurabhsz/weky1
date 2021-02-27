const Discord = require('discord.js');
module.exports.run = async (bot, message, args, client) => {
      message.channel.send(`Pong! \`${client.ws.ping}\``)
}

module.exports.config = {
    name: "ping",
    description: "shows you the speed of the bot in ms",
    usage: "/ping",
    accessableby: "Members",
    aliases: []
}