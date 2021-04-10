const Discord = require('discord.js');
module.exports = {
    name: "rank",
    aliases: ['r'],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..rank',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const db = require('../../schemas/Guild').findOne({ GuildID: message.guild.id}, async (err, data) => {

            if(data.leveling === "1") {
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
        .then(data => {
            const attachment = new Discord.MessageAttachment(data, "rank.png")
            message.channel.send(attachment)
        })
    } else {
        return message.reply(`Some mod turned leveling off or didnt even turned it on :rage:`)
    }
})
}
}