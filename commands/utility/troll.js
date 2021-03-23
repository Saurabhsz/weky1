module.exports = {
    name: "tr",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..tr',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        message.delete()
const Discord = require("discord.js")
 var embed = new Discord.MessageEmbed()
.setTitle("Support Weky Message")
.addField("Support Me!", "click [here](https://pnrtscr.com/ck08e6)" )
.setColor("303030")
message.channel.send(embed).then(message.channel.send(args.slice(1).join(" ")))
    }}
