  
const usedCommand = new Set();

module.exports.run = async (bot, message, args) => {
        const { MessageEmbed, Message } = require("discord.js");
            const Embed = new MessageEmbed()
            .setAuthor(bot.displayAvatarURL())
            .setDescription(`By using Weky bot, you agree of following all these rules. Breaking one will result the access from any command.`)
            .addField(`[RULE 1](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)
                       \n\`Alts Bank\`\nDon't use any alts (other accounts) to deposit the coins or items and keep them safe.\n\n
                       [RULE 2](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)
                       \n\`Raiding\`\nDon't use the bot for a raid of commands or for a spam with the echo commands.\n\n
                       [RULE 3](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)
                       \n\`Scripts, Auto Grind\`\nSelf bots, scripts
                       Usage of user-bots, macros, scripts, auto-typers or anything else enabling auto grinding are causing a lot of spam and they are not allowed.\n\n
                       [RULE 4](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)
                       \n\`Real money trading\`\nNo items or anything from our currency selling for real things or money.\n\n
                       [RULE 5](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)
                       \n\`Sharing bugs\`\nSharing any bug about this bot with the other users. Please keep the bugs only for you and use the ..report command for us to see it.
                       `)
        message.channel.send(Embed);

}

module.exports.config = {
    name: "lmo",
    aliases: []
}