
const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "threats",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..threats',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const fetch = require('node-fetch')
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]) || message.author;
        let avatar = user.avatarURL({
          format: 'png',
          dynamic: false,
          size: 128
        })
        message.channel.send('Loading...')
        const e = Math.floor(Math.random() * 10) +1
          const res = `https://nekobot.xyz/api/imagegen?type=threats&url=${avatar}&raw=1`
          const embed = new Discord.MessageEmbed()
          .setImage(res)
          .setColor('#303030')
          message.channel.send(embed);
    }
}