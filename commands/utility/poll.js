
        
    const config = require('../../util/config.json');

    module.exports.run = async (client, message, args, utils, data) => {

        let pollDescription = args.slice(0).join(' ');
if(!pollDescription) return message.reply(`What you want to put in this poll :D?`)
        let embedPoll = new Discord.MessageEmbed()
        .setTitle(`😲 ${message.author.username} Made a new POLL`)
        .setDescription(pollDescription)
        .setColor('RANDOM')
        let msgEmbed = await message.channel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    };
    
    module.exports.help = {
        aliases: ['ask'],
        name: 'poll',
        description: 'Quick poll',
        usage: config.prefix + 'poll &text&',
    };
    
    module.exports.config = {
        args: false,
        restricted: false,
        category: 'utility',
        disable: false,
        cooldown: 1000,
    };