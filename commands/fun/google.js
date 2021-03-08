
const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: "google",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..google',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {

const query = args.slice(1).join('+');
if(!query) return message.reply('What to search?')
message.channel.send(`https://lmgtfy.app/?q=${query}`)
}
}