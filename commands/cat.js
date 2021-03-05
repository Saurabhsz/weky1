const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  const randomAnimal = require("random-animal.js")
  randomAnimal.randomCat().then(cat => {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`🐱`)
    .setImage(cat)
    message.channel.send(embed)
})
}
module.exports.config = {
    name: "cat",
    aliases: []
}