const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const ErrEmbed = new Discord.MessageEmbed()
.setDescription(`<:downWeky:815202675868172308> | You didn't approve any reasons to warn that user.`)
const mentionEmbed = new Discord.MessageEmbed()
.setDescription(`<:downWeky:815202675868172308> | You didnt mentionated someone, or your arguments are not valid.`)
let toWarn = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
if(!toWarn){
    message.channel.send(mentionEmbed)
}
if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    return;
}
if(message.author.id === toWarn.id) return;
const reason = args.slice(2).join(" ")
if(!reason)
return message.channel.send(ErrEmbed)
const punishments = require('../schemas/wanings')

let data = await punishments.findOne({
    GuildID: message.guild.id,
    UserID: toWarn.id
});

if(data) {
    data.Punishments.unshift({
        PunishType: 'Warn',
        Moderator: message.author.id,
        Reason: reason,
    });
    data.save();
         const embed = new Discord.MessageEmbed()
         .setDescription(`<:upWeky:815202285100597260> | **${toWarn}** has been warned for \`${reason}\``)
         message.channel.send(embed)
        } else if (!data) {
            let newData = new punishments({
                GuildID: message.guild.id,
                UserID: toWarn.id,
                Punishments: [{
                    PunishType: 'Warn',
                    Moderator: message.author.id,
                    Reason: reason,
                }, ],
            });
            newData.save();
             const embed = new Discord.MessageEmbed()
             .setDescription(`<:upWeky:815202285100597260> | **${toWarn}** has been warned for \`${reason}\``)
             message.channel.send(embed)
            }
  }
  module.exports.config = {
    name: "warn",
    description: "warn someone for breaking rules",
    usage: "..warn @user reason",
    accessableby: "Members",
    aliases: []
}