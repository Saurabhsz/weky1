const Discord = require('discord.js');
module.exports = {
    name: "leaderboardrank",
    aliases: ["lbrank", 'lbr'],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..lbrank',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
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
}
}