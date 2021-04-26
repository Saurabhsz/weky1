
    const config = require('../../util/config.json');

    module.exports.run = async (client, message, args, utils, data) => {
    const Discord = require("discord.js")
    var embed = new Discord.MessageEmbed()
    .addField("**Weky Bot Invite**", "Invite me to the servers that you are by clicking [here](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)")
    .addField("**Support Server Invite**", "Join our support server by clicking [here](https://discord.gg/Sr2U5WuaSN), we do daily giveaways here :)")
    .addField("**Premium**", "Buy premium [here](https://patreon.com/weky)")
    message.channel.send(embed)
    };
    
    module.exports.help = {
        aliases: ['link', 'support'],
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