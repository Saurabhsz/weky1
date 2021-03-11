var ms = require('ms')
module.exports = {
    name: "mute",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..mute',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["ONLY_IN_WEKY_SUPPORT_SERVER"],
    async execute(bot, message, args) {

    let Discord = require('discord.js')
//checking if the member has the mute perms
if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You can not use this command");
//checking if the bot has the mute perms
if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.channel.send("I do not have \`MUTE_MEMBERS\` permission.");
if (message.guild.id !== '795393018764591134') return message.reply('This command can only be used in another server.');
const mentionedMember = message.mentions.members.first();

const muteRole = message.guild.roles.cache.find(role => role.id === '814569175284318270')
if (!mentionedMember) return message.channel.send("Please state a member that is in the server to mute");

    await mentionedMember.roles.remove(muteRole).then(message.channel.send(`<@${mentionedMember.id}> has been unmuted`));
    await mentionedMember.send(`You have been unmuted`).catch(err => console.log(err));

    }
}