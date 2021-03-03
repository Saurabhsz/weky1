  
const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
        const { MessageEmbed, Message } = require("discord.js");
            const Embed = new MessageEmbed()
            .setAuthor(bot.user.displayAvatarURL())
            .setDescription(`By using Weky bot, you agree of following all these rules. Breaking one will result the access from any command.`)
            .addField(`<:empty:816584899502538755>`,
                       `[RULE 1](https://www.youtube.com/)\n\`Alts Bank\`\nDon't use any alts (other accounts) to deposit the coins or items and keep them safe.`)
            .addField(`<:empty:816584899502538755>`,
                       `[RULE 2](https://www.youtube.com/)\n\`Raiding\`\nDon't use the bot for a raid of commands or for a spam with the echo commands.`)
            .addField(`<:empty:816584899502538755>`,
                       `[RULE 3](https://www.youtube.com/)\n\`Scripts, Auto Grind\`\nSelf bots, scripts
                       Usage of user-bots, macros, scripts, auto-typers or anything else enabling auto grinding are causing a lot of spam and they are not allowed.`)
            .addField(`<:empty:816584899502538755>`,
                       `[RULE 4](https://www.youtube.com/)\n\`Real money trading\`\nNo items or anything from our currency selling for real things or money.`)
            .addField(`<:empty:816584899502538755>`,
                       `[RULE 5](https://www.youtube.com/)\n\`Sharing bugs\`\nSharing any bug about this bot with the other users. Please keep the bugs only for you and use the ..report command for us to see it.`)
        message.channel.send(Embed);

}

module.exports.config = {
    name: "lmo",
    aliases: []
}