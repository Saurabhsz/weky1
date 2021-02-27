const Discord = require('discord.js');
module.exports.run = async (bot, message, args, client) => {
    const msg = await message.channel.send("Pinging...");

    const apiLatency = Math.round(client.ws.ping);
    const botLatency = msg.createdTimestamp - message.createdTimestamp;
    
    // Delete the 'Pinging...' message

    // Send 'Pong!' with the api and the bot latency
    msg.edit(`Pong! API latency is **${apiLatency}ms**, bot latency is **${botLatency}ms**`);
}

module.exports.config = {
    name: "ping",
    description: "shows you the speed of the bot in ms",
    usage: "/ping",
    accessableby: "Members",
    aliases: []
}