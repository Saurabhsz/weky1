
const { DiscordAPIError } = require("discord.js");

module.exports.config = {
    name: "google",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..google',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {

const query = args.slice(0).join('+');
if(!query) return message.reply('What to search?')
message.channel.send(`https://lmgtfy.app/?q=${query}`)
}
}