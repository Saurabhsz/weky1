const Discord = require('discord.js');
const Canvas = require('canvas');
const { MessageEmbed } = require("discord.js")

module.exports.config = {
  name: "8ball",
  aliases: ["8-ball"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..8ball',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
    if(!args[0]) return message.reply(`Please put a valid question <:ah:811587999380799498>.`)
    const fetch = require('node-fetch')
    const res = await (await (fetch(`https://api.monkedev.com/fun/8ball?key=scNyfoysHunZd79reAL5VEsQV`))).json();
    const b = new Discord.MessageEmbed()
    .setTitle(`${args.join(' ').slice(0, 210)}\``)
    .setDescription(`😶 \`${res.answer}\``)
    message.reply(b)
}
}