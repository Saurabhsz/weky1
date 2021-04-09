const Discord = require("discord.js")

module.exports = {
    name: "invite",
    aliases: ['link','links','server','support'],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..invite',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    var embed = new Discord.MessageEmbed()
    .addField("**Weky Bot Invite**", "Invite me to the servers that you are by clicking [here](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)")
    .addField("**Support Server Invite**", "Join our support server by clicking [here](https://discord.gg/Sr2U5WuaSN), we do daily giveaways here :)")
    message.channel.send(embed)
}

}