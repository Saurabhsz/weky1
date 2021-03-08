const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "purge",
    aliases: ["clear"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..purge (amount)',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["MANAGE_MESSAGES"],
    async execute(bot, message, args) {
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You don\'t have permission to use this command').then(m => m.delete({timeout: 5000}));
        if (!message.guild.me.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send('I don\'t have permission to use that command').then(m => m.delete({timeout: 5000}))
        
        let deleteAmount;
    
        if (isNaN(args[1]) || parseInt(args[1]) <= 0) { return message.reply('Please put a number only!').then(m => m.delete({timeout: 5000})) }
    
        if (parseInt(args[1]) > 100) {
            return message.reply('You can only delete 100 messages at a time!').then(m => m.delete({timeout: 5000}))
        } else {
            deleteAmount = parseInt(args[1]);
        }

        message.channel.bulkDelete(deleteAmount + 1, true);
        await message.channel.send(`Successfully Deleted **${deleteAmount}** Messages.`).then(m => m.delete({timeout: 5000}))
    }
}