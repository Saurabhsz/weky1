const Discord = require("discord.js")

module.exports = {
    name: "invite",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..invite',
    cooldown: 4, //seconds(s)
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
    var embed = new Discord.MessageEmbed()
    .addField("**Weky Bot Invite**", "Invite me to the servers that you are by clicking  [here](https://discord.com/oauth2/authorize?client_id=809496186905165834&scope=bot&permissions=2083912822)")

    message.channel.send(embed)
}

}