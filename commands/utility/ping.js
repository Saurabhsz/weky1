
    const config = require('../../util/config.json');

    module.exports.run = async (client, message, args, utils, data) => {
    const msg = await message.channel.send("Pinging...");

    const apiLatency = Math.round(bot.ws.ping);
    const botLatency = msg.createdTimestamp - message.createdTimestamp;
    
    // Delete the 'Pinging...' message

    // Send 'Pong!' with the api and the bot latency
    msg.edit(`Pong! API latency is **${apiLatency}ms**, bot latency is **${botLatency}ms**`);
    
    };
    
    module.exports.help = {
        aliases: [],
        name: 'invite',
        description: 'Links of da bot',
        usage: config.prefix + 'invite',
    };
    
    module.exports.config = {
        args: false,
        restricted: false,
        category: 'utility',
        disable: false,
        cooldown: 1000,
    };