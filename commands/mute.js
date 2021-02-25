var Discord = require('discord.js');
var ms = require('ms');

exports.run = async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('You can\'t use that!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('You didn\'t mention anyone!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('They aren\'t in the server!');
    var rawTime = args[1];
    var time = ms(rawTime);
    if(!time) return msg.reply('You didn\'t specify a time!');

    var reason = args.splice(2).join(' ');
    if(!reason) return msg.reply('You need to give a reason!');

    var log = new Discord.MessageEmbed()
    .setTitle('User Muted')
    .addField('User:', user, true)
    .addField('By:', msg.author, true)
    .addField('Expires:', rawTime)
    .addField('Reason:', reason)
    msg.channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('You were muted!')
    .addField('Expires:', rawTime, true)
    .addField('Reason:', reason, true);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    var role = msg.guild.roles.cache.find(r => r.name === 'Muted');

    member.roles.add(role);
    if(!role) return msg.reply(`I cant fing a "Muted" role, make sure it is called like that.`)
    setTimeout(async() => {
        member.roles.remove(role);
    }, time);

    msg.channel.send(`**${user}** has been muted by **${msg.author}** for **${rawTime}**!`);
}
module.exports.config = {
    name: "mute",
    description: "Add the role that the no permissions to type for the specified time",
    usage: "/mute",
    accessableby: "Moderators",
    aliases: []
}