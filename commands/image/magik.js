

const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports = {
    name: "magik",
    aliases: [],
    dmOnly: false, //or false
    guildOnly: true, //or false
    usage: '..magik',
    cooldown: 4, //seconds(s)
    cooldowny: 0,
    guarded: true, //or false
    permissions: ["NONE"],
    async execute(bot, message, args) {
        const fetch = require('node-fetch')
        let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({
          format: 'png',
          dynamic: false,
          size: 1024
        })

        const e = Math.floor(Math.random() * 11) +1
        try {
          const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=magik&image=${avatar}&intensity=${e}&raw=1`));

          const attachment = new Discord.MessageAttachmentt(res, "magik.png");
          message.channel.send(attachment);
        } catch (err) {
          console.log(err)
        }
}
}