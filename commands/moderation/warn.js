

                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
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
const reason = args.slice(1).join(" ")
if(!reason)
return message.channel.send(ErrEmbed)
const punishments = require('../../schemas/wanings')

let ata = await punishments.findOne({
    GuildID: message.guild.id,
    UserID: toWarn.id
});

if(ata) {
    ata.Punishments.unshift({
        PunishType: 'Warn',
        Moderator: message.author.id,
        Reason: reason,
    });
    ata.save();
         const embed = new Discord.MessageEmbed()
         .setDescription(`**${toWarn}** has been warned for \`${reason}\``)
         message.channel.send(embed)
        } else if (!ata) {
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
             .setDescription(`**${toWarn}** has been warned for \`${reason}\``)
             message.channel.send(embed)
            }
                };
                
                module.exports.help = {
                    aliases: [],
                      name:'warn',
                      description: 'Warn a user/bot.',
                      usage: config.prefix + 'warn @user %reason%',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'moderation',
                  disable: false,
                  cooldown: 1000,
                };