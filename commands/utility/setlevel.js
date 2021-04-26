

/* eslint-disable no-unused-vars */

module.exports.run = async (client, message, args, utils, data) => {
if(args[0] === 'on'){
    const prefixModel = require('../../schemas/Guild')
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_MESSAGES**");
     }
    
    message.channel.send(`Leveling has been setted to **on**`);
    
        const data = await prefixModel.findOneAndUpdate({
            leveling: 1,
            GuildID: message.guild.id
        })
    data.save()
} else if(args[0] === 'off'){
    const prefixModel = require('../../schemas/Guild')
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(":x: | You don't have permission to use that command\n \`Required Permission\`: **MANAGE_MESSAGES**");
     }
    
    message.channel.send(`Leveling has been setted to **off**`);
    
        const data = await prefixModel.findOneAndUpdate({
            leveling: null,
            GuildID: message.guild.id
        })
    data.save()
} else {
    return message.channel.send('Incorrect format\nExample: `..level (on || off)`');
}
};

module.exports.help = {
	aliases: ['levelset'],
	name: 'setlevel',
	description: 'Turn on/off leveling',
	usage: '..setlevel %on | off%',
};

module.exports.config = {
	args: false,
	restricted: false,
	category: 'utility',
	disable: false,
	cooldown: 10000,
};