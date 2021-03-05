const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomFox().then(fox => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🦊`)
    .setImage(fox)
    message.channel.send(embed)
})
}
module.exports.config = {
    name: "fox",
    aliases: ["foxxy", "foxy"]
}