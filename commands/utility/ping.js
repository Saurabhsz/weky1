const Discord = require('discord.js');
module.exports = {
    name: "ping",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..ping',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    const msg = await message.channel.send("Pinging...");

    const apiLatency = Math.round(bot.ws.ping);
    const botLatency = msg.createdTimestamp - message.createdTimestamp;
    
    // Delete the 'Pinging...' message

    // Send 'Pong!' with the api and the bot latency
    msg.edit(`Pong! API latency is **${apiLatency}ms**, bot latency is **${botLatency}ms**`);
}
}