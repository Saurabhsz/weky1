const Discord = require('discord.js');
module.exports = {
  name: "fox",
  aliases: ["foxxy", "foxy"],
  dmOnly: false, //or false
  guildOnly: true, //or false
  usage: '..daily',
  cooldown: 4, //seconds(s)
  cooldowny: 0,
  guarded: true, //or false
  permissions: ["NONE"],
  async execute(bot, message, args) {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomFox().then(fox => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🦊`)
    .setImage(fox)
    message.channel.send(embed)
})
  }}