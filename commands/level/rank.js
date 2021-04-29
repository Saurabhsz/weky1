

                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
                    const db = require('../../schemas/Guild').findOne({ GuildID: message.guild.id}, async (err, ata) => {

                        if(ata.leveling === true) {
            const Levels = require('discord-xp')
                const canvacord = require('canvacord')
                    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
                    const user = await Levels.fetch(target.id, message.guild.id)
                    const neededXp = Levels.xpFor(parseInt(user.level) + 1);
                    if (!user) return message.reply("You dont have any xp, try to be active");
                    const rank = new canvacord.Rank()
                    .setAvatar(target.displayAvatarURL({dynamic: false, format: 'png'}))
                    .setCurrentXP(user.xp)
                    .setRequiredXP(neededXp)
                    .setStatus(target.presence.status)
                    .setProgressBar("#00FF00", "COLOR")
                    .setUsername(target.username)
                    .setDiscriminator(target.discriminator)
                    rank.build()
                    .then(x => {
                        const attachment = new Discord.MessageAttachment(x, "rank.png")
                        message.channel.send(attachment)
                    })
                } else {
                    return message.reply(`Some mod turned leveling off or didnt even turned it on :rage:`)
                }
            })
                };
                
                module.exports.help = {
                    aliases: ['r'],
                      name:'rank',
                      description: 'Displaying you level.',
                      usage: config.prefix + 'rank {none OR @user}',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'level',
                  disable: false,
                  cooldown: 1000,
                };