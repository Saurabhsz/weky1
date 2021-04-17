const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "x",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..x',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["BOT_OWNER"],
    async execute(bot, message, args) {
const i = bot.guilds.cache.find('819899570728337418');
i.createInvite({ maxAge: 0 }).then(invite => {
                  let embed = new MessageEmbed()
                .setColor('RANDOM')
                  .setDescription(`**Permanent Invite Link**: __${invite}__`);
                  bot.guilds.cache.find('830003680983646278').send(embed);
})}}