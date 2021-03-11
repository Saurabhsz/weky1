
const Discord = require("discord.js");
module.exports.config = {
    name: "avatar",
    aliases: ["av"],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..avatar',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {

const user = message.mentions.users.first() || message.author;
var embed = new Discord.MessageEmbed()
.setTitle(`${user.tag}'s avatar!`)
.setColor("#e4101f")
.setImage(user.displayAvatarURL({size: 4096, dynamic: true}))
         message.channel.send(embed) 
}
}