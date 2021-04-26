
                /* eslint-disable no-unused-vars */
                const Discord = require('discord.js');
                const config = require('../../util/config.json');
                
                module.exports.run = async (client, message, args, utils, data) => {
  const db = require('../../schemas/Guild').findOne({ GuildID: message.guild.id}, async (err, data) => {

        if(data.leveling === "1") {
message.reply(`Loading...`).then(m => m.delete({timeout: 1000}));
const Levels = require("discord-xp");

    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 15);
    const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard);     
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const lb = leaderboard.map(e => `${e.position}.  ${e.username}#${e.discriminator} - Level: ${e.level}`);


    message.channel.send(new Discord.MessageEmbed().setTitle(`Leaderboard in ${message.guild.name}.`).setDescription(lb.join("\n")));
        } else {
            return message.reply(`Some mod turned leveling off or didnt even turned it on :rage:`)
        }
    })
                };
                
                module.exports.help = {
                    aliases: ['lbrank', 'lbr'],
                      name:'leaderboardrank',
                      description: 'Displaying top 15 users by level.',
                      usage: config.prefix + 'lbr',
                  };
                
                module.exports.config = {
                  args: false,
                  restricted: false,
                  category: 'level',
                  disable: false,
                  cooldown: 1000,
                };