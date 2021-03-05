const Discord = require('discord.js');
const Canvas = require('canvas');
module.exports.run = async (bot, message, args) => {
    if(!args[1]) return message.reply(`Please put a valid question <:ah:811587999380799498>.`)
    const fetch = require('node-fetch')
    const res = await (await (fetch(`https://api.monkedev.com/fun/8ball?key=scNyfoysHunZd79reAL5VEsQV`))).json();
    const b = new Discord.MessageEmbed()
    .setTitle(`${args.join(' ').slice(0, 210)}\``)
    .setDescription(`😶 \`${res.answer}\``)
    message.reply(b)
}

module.exports.config = {
    name: "8ball",
    description: "ask your question to the magically 8ball",
    usage: "..8ball (question)",
    accessableby: "Members",
    aliases: ["8-ball"]
}