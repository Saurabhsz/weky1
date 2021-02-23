
const { DiscordAPIError } = require("discord.js");

module.exports.run = async (bot, message, args) => {

const query = args.slice(1).join('+');
if(!query) return message.reply('What to search?')
message.channel.send(`https://lmgtfy.app/?q=${query}`)
}
module.exports.config = {
    name: "google",
    description: "searching on gugle the words that you said",
    usage: "/google",
    accessableby: "Members",
    aliases: ["google"]
}